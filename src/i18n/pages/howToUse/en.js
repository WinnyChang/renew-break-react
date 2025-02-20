export default {
    title: 'How to Use',

    beforeYouStart: {
        heading: 'Before You Start',

        enableBrowserNotifications: 'Please <b>enable browser notifications</b> for this site. Click the button below:',
        buttonEnable: 'Enable Notifications',
        buttonEnabled: 'Notifications Enabled',

        allowSystemNotifications: 'Please also <b>allow system notifications</b> from your browser.',
        showMeHow: 'Show me how',
        instructionsForWindowsUsers: 
            'Windows users: First, click the \'Send Test Notification\' button below. ' +
            'If you receive a notification, you\'re all set! If not, ' +
            'go to <b>Start → Settings → System → Notifications</b>, ' +
            'under <b>Notifications from apps and other senders</b>, ' +
            'select your browser, turn on notification and make sure ' +
            '<b>Show notification banners</b> is checked for the best experience.',
        instructionsForMacOSUsers:
            'MacOS users: Go to <b>System Settings → Notifications</b>, ' +
            'under <b>Application Notifications</b>, ' +
            'select your browser, allow notifications and select <b>Alerts</b> for the best experience. ' +
            'For Google Chrome and Microsoft Edge users: ' +
            'You\'ll need to configure the same settings for both the ' +
            '\'[Browser]\' and \'[Browser] Helper (Alerts)\' entries.',

        readyToTest: 'Ready to test? Click below:',
        buttonTest: 'Send Test Notification',

        note: 'Note: This web app is designed for <b>computer web browsers</b>, and some features may not work properly on mobile devices.'
    },

    timers: {
        heading: 'Timers',

        eyeRestTimer: 'Eye Rest Timer',
        remindYouToRest: 'Reminds you to rest your eyes at regular intervals.',
        autoRepeats: 'Automatically repeats until it\'s time for a stand-up break.',
        canTurnOff: 'Can be turned off if you prefer.',

        standUpTimer: 'Stand Up Timer',
        focusAndBreak: 'Includes a focus timer and a break timer:',
        focusTimer: 'The focus timer reminds you to stand up after a set period of work.',
        breakTimer: 'The break timer notifies you when your break is over. The break timer can be turned off if you prefer.',

        timerPresets: 'Timer Presets',
        choosePresetOrCustom: 'Choose from one of three presets or select the <b>Custom</b> option to set timers manually.'
    },

    feedback: {
        heading: 'I\'d Love Your Feedback!',
        description: 'Thank you for using RenewBreak! Help shape the future of this app by completing this ' + 
            '<a className="feedback" href="https://forms.gle/thmp2eGWhjhP5kur7" target="_blank">brief 9-question feedback form</a>.'
    }
};