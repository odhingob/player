import React from 'react'
import ReactPlayer from 'react-player';

export interface IPlayerProps {
    url: string;
}

const Player = ({ url }: IPlayerProps) => {
  return (
    <ReactPlayer url={url} />
  )
}

export default Player