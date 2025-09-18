// config.js
window.APP_CONFIG = {
  API_URL: "http://localhost:3000/api/v1/verify/parcel",

  API_HEADERS: {
    "Accept": "application/json",
    "X-LOCATION-ID": "DGBD-DHABOSILA",
    "X-DEVICE-MAC": "5C:01:3B:6C:07:08",
    "Content-Type": "application/json"
  },

  /* ============ DOOR + STATUS API CONFIG ============ */
  DOOR_API_URL: "http://192.168.68.115/api/door",
  STATUS_API_URL: "http://192.168.68.115/api/status",
  DEVICE_HEADERS: {
    "location_id": "DGBD-DHABOSILA",
    "mac": "5C:01:3B:6C:07:08",
    "Content-Type": "application/json"
  },

  /* ============ RIDER VERIFY API CONFIG ============ */
  RIDER_VERIFY_URL: "http://localhost:3000/api/v1/verify/rider/access-code",
  RIDER_CONFIRM_URL: "http://localhost:3000/api/v1/confirm/rider/access-code",
  RIDER_HEADERS: {
    "Accept": "application/json",
    "X-LOCATION-ID": "DGBD-DHABOSILA",
    "X-DEVICE-MAC": "5C:01:3B:6C:07:08",
    "Content-Type": "application/json"
  }
};
