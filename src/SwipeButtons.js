import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from '@material-ui/core/IconButton';

import "./SwipeButtons.css"

const SwipeButtons = () => {
    return (
        <div className="swipe-buttons">
            <IconButton><ReplayIcon className="swipe-button undo" fontSize="large"/></IconButton>
            <IconButton><CloseIcon className="swipe-button dislike" fontSize="large"/></IconButton>
            <IconButton><StarRateIcon className="swipe-button superlike" fontSize="large"/></IconButton>
            <IconButton><FavoriteIcon className="swipe-button like" fontSize="large"/></IconButton>
            <IconButton><FlashOnIcon className="swipe-button boost" fontSize="large"/></IconButton>
        </div>
    );
}

export default SwipeButtons;