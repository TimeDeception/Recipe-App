import React from "react";
import { User } from "./types";

interface UserInfoProps {
    user: User;
    onLogout: () => void;
    onUpgrade?: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ user, onLogout, onUpgrade }) => {
    return(
        <div className="user-info-card">
            <h2>Account Info</h2>
            <p><strong>Username:</strong>{user.username}</p>
            <p><strong>Email:</strong>{user.email}</p>
            <p>
                <strong>Subscription Status:</strong>
                {user.subscriptionStatus === "premium" ? "Premium" : "Free"}
                {user.subscriptionStatus !== "premium" && (<button onClick={onUpgrade} style={{ marginLeft: 8}} >Upgrade</button>)}
            </p>
            <button onClick={onLogout}>Log Out</button>
        </div>
    );
};

export default UserInfo;