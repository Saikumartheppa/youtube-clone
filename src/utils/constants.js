const YTAPIKEY=import.meta.env.VITE_YOUTUBE_KEY;
export const POPULAR_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=${YTAPIKEY}`;

export const GET_CHANNEL_API = (channelId) =>  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YTAPIKEY}`;

export const GET_YOUTUBE_VIDEO_BY_ID = (videoId) => `https://www.youtube.com/embed/${videoId}?autoplay=1`;

export const GET_YOUTUBE_SEARCH_SUGGESTIONS = (searchQuery) => `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;

export const VIDEO_API = (videoId) => `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nYLkyW2dDXU&key=AIzaSyAiOzdKObeqyeoR06aJvbwo-M7VbdXz0Go`;

export const buttonsList = ["All" , "Music" , "Trending", "Live" , "Thrillers" , "Watched" , "Recently uploaded" ," New to you" , "Presentations" , "Tamil cinema", "Telugu cinema" , "Movies" , "Trending", "Live" , "Thrillers" , "Watched" , "Recently uploaded" ,"New to you" , "Presentations" , "Tamil cinema", "Telugu cinema" , "Movies"]; 

export const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Raja Vikramaditya",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Take You forward",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Java Brains",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Namastey Dev",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Code with Harry",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Apna College",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Telusko",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Entropik.io",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Code with random",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Striver ",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tech Burner",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

export const PROFILE_ICON =  `https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;