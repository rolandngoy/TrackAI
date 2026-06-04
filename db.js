// src/utils/db.js
// All database operations. Uses AsyncStorage so data persists across
// logouts, app restarts, and phone restarts.
// Import { db } everywhere — never call AsyncStorage directly.

import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'trackai_v1';

const EMPTY = { accounts: {}, classes: {}, session: null };

class Database {
  constructor() {
    this._data = null; // cached in memory once loaded
  }

  // ── Load ──────────────────────────────────────────────────────
  async load() {
    if (this._data) return this._data;
    try {
      const raw = await AsyncStorage.getItem(KEY);
      this._data = raw ? JSON.parse(raw) : { ...EMPTY };
    } catch {
      this._data = { ...EMPTY };
    }
    return this._data;
  }

  // ── Save ──────────────────────────────────────────────────────
  async save() {
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(this._data));
    } catch (e) {
      console.warn('TrackAI DB save failed', e);
    }
  }

  // ── Auth ──────────────────────────────────────────────────────
  async getSession() {
    const d = await this.load();
    return d.session;
  }

  async setSession(session) {
    const d = await this.load();
    d.session = session;
    await this.save();
  }

  async getAccount(email) {
    const d = await this.load();
    return d.accounts[email] || null;
  }

  async createAccount(acct) {
    const d = await this.load();
    d.accounts[acct.email] = acct;
    await this.save();
  }

  async accountExists(email) {
    const d = await this.load();
    return !!d.accounts[email];
  }

  // ── Classes ───────────────────────────────────────────────────
  async getClass(code) {
    const d = await this.load();
    return d.classes[code] || null;
  }

  async classExists(code) {
    const d = await this.load();
    return !!d.classes[code];
  }

  async createClass(cls) {
    const d = await this.load();
    d.classes[cls.code] = cls;
    // Also add code to professor's profData.classes
    const prof = d.accounts[cls.profEmail];
    if (prof && prof.profData) {
      if (!prof.profData.classes.includes(cls.code)) {
        prof.profData.classes.push(cls.code);
      }
    }
    await this.save();
  }

  async updateClass(cls) {
    const d = await this.load();
    d.classes[cls.code] = cls;
    await this.save();
  }

  async getProfClasses(email) {
    const d = await this.load();
    const prof = d.accounts[email];
    if (!prof?.profData?.classes) return [];
    return prof.profData.classes
      .map(code => d.classes[code])
      .filter(Boolean);
  }

  async getStudentClasses(email) {
    const d = await this.load();
    const stu = d.accounts[email];
    if (!stu?.studentData?.classes) return [];
    return stu.studentData.classes
      .map(code => d.classes[code])
      .filter(Boolean);
  }

  // ── Student joining a class ───────────────────────────────────
  async joinClass(studentEmail, classCode) {
    const d = await this.load();
    const cls = d.classes[classCode];
    const stu = d.accounts[studentEmail];
    if (!cls || !stu) return false;

    // Add class to student's list
    if (!stu.studentData) stu.studentData = { classes: [] };
    if (!stu.studentData.classes.includes(classCode)) {
      stu.studentData.classes.push(classCode);
    }

    // Add student to class roster
    if (!cls.students) cls.students = [];
    if (!cls.students.find(s => s.email === studentEmail)) {
      cls.students.push({
        email: studentEmail,
        name: stu.name,
        grades: {},
        submissions: {},
      });
    }

    await this.save();
    return true;
  }

  // ── Grades ────────────────────────────────────────────────────
  async saveGrade(classCode, studentEmail, assignId, score) {
    const d = await this.load();
    const cls = d.classes[classCode];
    if (!cls) return;
    const stu = cls.students?.find(s => s.email === studentEmail);
    if (stu) {
      if (!stu.grades) stu.grades = {};
      stu.grades[assignId] = score;
    }
    await this.save();
  }

  // ── Chat ──────────────────────────────────────────────────────
  async addClassMessage(classCode, msg) {
    const d = await this.load();
    const cls = d.classes[classCode];
    if (!cls) return;
    if (!cls.chatMessages) cls.chatMessages = [];
    cls.chatMessages.push(msg);
    await this.save();
  }

  async addPrivateMessage(classCode, studentEmail, msg) {
    const d = await this.load();
    const cls = d.classes[classCode];
    if (!cls) return;
    if (!cls.profMessages) cls.profMessages = {};
    if (!cls.profMessages[studentEmail]) cls.profMessages[studentEmail] = [];
    cls.profMessages[studentEmail].push(msg);
    await this.save();
  }

  // ── Assignments ───────────────────────────────────────────────
  async addAssignment(classCode, assignment) {
    const d = await this.load();
    const cls = d.classes[classCode];
    if (!cls) return;
    if (!cls.assignments) cls.assignments = [];
    cls.assignments.push(assignment);
    await this.save();
  }

  // ── Dev helpers ───────────────────────────────────────────────
  async clearAll() {
    this._data = { ...EMPTY };
    await AsyncStorage.removeItem(KEY);
  }
}

export const db = new Database();
export default db;
