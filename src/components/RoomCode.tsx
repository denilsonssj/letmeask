

import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export default function RoomCode({ code }: RoomCodeProps) {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code"></img>
            </div>
            <span>Sala #{ code }</span>
        </button>
    );
}