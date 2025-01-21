// Utility functions for the backend

/**
 * Logs a message with a timestamp.
 * @param {string} message - The message to log.
 */
function logWithTimestamp(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
}

module.exports = {
    logWithTimestamp
};
