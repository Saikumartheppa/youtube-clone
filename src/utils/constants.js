const YTAPIKEY=import.meta.env.VITE_YOUTUBE_KEY;
export const POPULAR_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YTAPIKEY}`;

export const GET_CHANNEL_API = (channelId) =>  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyBE_qY1idL7OHECbjnagv9G3MF41YNNoMs`;


export const buttonsList = ["All" , "Music" , "Trending", "Live" , "Thrillers" , "Watched" , "Recently uploaded" ," New to you" , "Presentations" , "Tamil cinema", "Telugu cinema" , "Movies" , "Trending", "Live" , "Thrillers" , "Watched" , "Recently uploaded" ,"New to you" , "Presentations" , "Tamil cinema", "Telugu cinema" , "Movies"]; 