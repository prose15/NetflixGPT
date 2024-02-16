export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_PROFILE = "https://occ-0-7275-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
export const MOVIE_LOGO = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/desyomp-52327bbd-d4b5-4d4f-9e12-0dd1017f7055.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVzeW9tcC01MjMyN2JiZC1kNGI1LTRkNGYtOWUxMi0wZGQxMDE3ZjcwNTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qJ260rDyG869q0Xgy5BnlkJY4aOm8C8-6KpttygRTjM"
export const MOVIE_POSTERS = "https://image.tmdb.org/t/p/w500/";
export const BACKGROUND_IMAGES = "https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+process.env.REACT_APP_TMBD_API_KEY
    }
  };
 export const Supported_lang = [
    {identifiers:'en', name:'English'},
    {identifiers:'tamil', name:'Tamil'},
    {identifiers:'hindi', name:'Hindi'}
  ]
  export const lang = {
    en:{
      placeholder:'what movie would you like to watch today',search:'search'
    },
    tamil:{
      placeholder:'இன்று நீங்கள் எந்த திரைப்படத்தைப் பார்க்க விரும்புகிறீர்கள்?',search:'தேடல்'
    },
    hindi:{
      placeholder:'आज आप कौन सी फिल्म देखना पसंद कर सकते हैं?',search:'खोज'
    }
  }
  export const OPEN_AI_KEY =process.env.REACT_APP_OPEN_AI_KEY