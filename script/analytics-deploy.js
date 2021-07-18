self.importScripts('/script/analytics-interface.js');
self.addEventListener('notificationclose', function(event) {
  event.waitUntil(
    sendAnalyticsEvent('close', 'notification')
  );
});
