export default {
    title: '使用方式',

    beforeYouStart: {
        heading: '開始之前',

        enableBrowserNotifications: '請<b>啟用瀏覽器通知</b>以使用本網站功能。點擊下方按鈕：',
        buttonEnable: '啟用通知',
        buttonEnabled: '通知已啟用',

        allowSystemNotifications: '另外，也請<b>允許瀏覽器發送的系統通知</b>。',
        showMeHow: '教我怎麼做',
        instructionsForWindowsUsers: 
            'Windows 使用者：首先，請點擊下方的「發送測試通知」按鈕。' +
            '如果您有收到通知，就可以直接開始使用囉！如果沒有，' +
            '請前往 <b>開始 → 設定 → 系統 → 通知</b>，' +
            '在<b>應用程式和其他發送者的通知</b>列表中，選擇您的瀏覽器，開啟通知，' +
            '並勾選<b>顯示通知橫幅</b>以獲得最佳體驗。',
        instructionsForMacOSUsers:
            'MacOS 使用者：請前往<b>系統設定 → 通知</b>，' +
            '在<b>應用程式通知</b>下，選擇您的瀏覽器，允許通知，並選擇<b>提醒</b>以獲得最佳體驗。' +
            '如果您是使用 Google Chrome 或 Microsoft Edge，' +
            '請對「[瀏覽器]」和「[瀏覽器] Helper (Alerts)」兩個項目做相同的設定。',

        readyToTest: '準備好要測試了嗎？點擊下方按鈕：',
        buttonTest: '發送測試通知',

        note: '註：本網站是專門為<b>電腦瀏覽器</b>設計的，部分功能可能無法在行動裝置上正常運作。'
    },

    timers: {
        heading: '計時器',

        eyeRestTimer: '護眼計時器',
        remindYouToRest: '定時提醒您休息眼睛。',
        autoRepeats: '在「專注時間」結束之前，會自動循環計時。',
        canTurnOff: '您可以依個人喜好關閉此計時器。',

        standUpTimer: '起立計時器',
        focusAndBreak: '裡面有「專注計時器」和「休息計時器」：',
        focusTimer: '專注計時器：在設定的專注時間結束後提醒您站起來。',
        breakTimer: '休息計時器：在休息時間結束時通知您。您可以依個人喜好關閉此計時器。',

        timerPresets: '計時器預設值',
        choosePresetOrCustom: '從三個預設值中選擇，或者選擇<b>自訂</b>來手動設定計時器。'
    },

    feedback: {
        heading: '歡迎提供使用回饋！',
        description: '感謝您使用「站停休息鐘」！歡迎透過此' + 
            '<a className="feedback" href="https://forms.gle/thmp2eGWhjhP5kur7" target="_blank">只有九個問題的回饋問卷</a>' +
            '分享您的使用感想，幫助我繼續升級這個網站～'
    }
};