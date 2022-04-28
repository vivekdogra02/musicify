import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom'
import Song from './Song'

function Songs() {
  const playlist: any = useRecoilValue(playlistState)
  return (
    <div className="px-8 flex flex-col text-white space-y-1 pb-28">
      {playlist && playlist?.tracks?.items?.map((data: any, i: number) => (
          <Song key={data.track.id} order={i} track={data}/>        
      ))}
    </div>
  )
}

export default Songs
