const YTAPIKEY=import.meta.env.VITE_YOUTUBE_KEY;
export const POPULAR_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=IN&key=${YTAPIKEY}`;

export const GET_CHANNEL_API = (channelId) =>  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YTAPIKEY}`;

export const GET_YOUTUBE_VIDEO_BY_ID = (videoId) => `https://www.youtube.com/embed/${videoId}?autoplay=1`;

export const GET_YOUTUBE_SEARCH_SUGGESTIONS = (searchQuery) => `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;

export const VIDEO_API = (videoId) => `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nYLkyW2dDXU&key=AIzaSyAiOzdKObeqyeoR06aJvbwo-M7VbdXz0Go`;

export const buttonsList = ["All" , "Music" , "Trending", "Live" , "Thrillers" , "Watched" , "Recently uploaded" ," New to you" , "Presentations" , "Tamil cinema", "Telugu cinema" , "Movies" , "Trending", "Live" , "Thrillers" , "Watched" , "Recently uploaded" ,"New to you" , "Presentations" , "Tamil cinema", "Telugu cinema" , "Movies"]; 