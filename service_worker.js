chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
        if (request.type === 'setBadge') {
            await chrome.action.setBadgeBackgroundColor({
                color: '#ff0000',
            })

            await chrome.action.setBadgeText({
                text: request.value
            })
        }
        return true
    }
);