// src/utils/notifications.js
import * as Notifications from 'expo-notifications';

export function setupNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
}

export async function requestPermission() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleDueTomorrow(title, className) {
  const trigger = new Date();
  trigger.setDate(trigger.getDate() + 1);
  trigger.setHours(9, 0, 0, 0);
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '📅 Due Tomorrow!',
      body: `${title} in ${className} is due tomorrow.`,
    },
    trigger: { date: trigger },
  });
}

export async function scheduleDueInOneHour(title) {
  const trigger = new Date(Date.now() + 60 * 60 * 1000);
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '⏰ Due Very Soon!',
      body: `${title} is due in 1 hour!`,
    },
    trigger: { date: trigger },
  });
}

export async function cancelAll() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
