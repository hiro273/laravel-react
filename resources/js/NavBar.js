import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav">
            <label className="uma">ウマ娘攻略</label>
            <Link to="/helper" className="space uma">このサイトの使い方</Link>
            <Link to="/" className="space">Home|</Link>
            <Link to="/about" className="space"><i class="far fa-user"></i>新規登録|</Link>
            <Link to="/auth"className="space"><i class="fas fa-sign-in-alt"></i>ログイン</Link>
        </div>
    );
}

export default NavBar;