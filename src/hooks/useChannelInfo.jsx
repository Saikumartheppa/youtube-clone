import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChannelInfo } from "../store/slices/appSlice";
import {GET_CHANNEL_API} from "../utils/constants";

const useChannelInfo = (channelId) => {
  const dispatch = useDispatch();
  const channelsInfo = useSelector((store) => store.app.channelsInfo);
  const getChannelInfo = async (channelId) => {
    const data = await fetch(GET_CHANNEL_API(channelId));
    const json = await data.json();
    dispatch(addChannelInfo({ channelId: channelId, data: json?.items?.[0] }));
  };
  useEffect(() => {
    channelId && !channelsInfo[channelId] && getChannelInfo(channelId);
  }, [channelId, channelsInfo]);

  return channelsInfo[channelId];
};
export default useChannelInfo;
