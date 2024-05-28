class User {
    username;
    constructor(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username = username;
        return;
    }
}

class ChatUser extends User {
    warning;
    constructor(username) {
        super(username);
        this.warning = 0;
    }

    giveWarning() {
        this.warning++;
        return;
    }

    getWarningCount() {
        return this.warning;
    }
}
