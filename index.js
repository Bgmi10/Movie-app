const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path')



app.use(cors())


const generaterandomid = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

  const movies = [
    {
      id: generaterandomid(4),
      title: "Animal",
      overview:
        "The son of a wealthy, powerful industrialist returns to India and undergoes a remarkable transformation as he becomes consumed by a quest for vengeance against those threatening his father's life.",
        poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/pwBtk8ngoMtqn0qv8j1feSFTKUn.jpg",
      download_link: "https://drive.google.com/file/d/10kdCZE3vyX6HeW1Br6Mi4tr53FEnOrr9/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Jeo",
      overview:
        "The Premam-meets-Raja Rani plot revolves around Joe (Rio Raj, solid, though his line delivery sometimes feels artificial), who falls in love with his classmate Sujithra (Malavika Manoj, okayish) in college. Even though the Malayali girl reciprocates, the romance is doomed.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/yRMJ4Jvr5YUXOQlYwxX4Q6H6P71.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/jGMNc2MqJ2mPdc4ceFvx1JvVKV5.jpg",
      download_link: "https://drive.google.com/file/d/11A_TEDjo9cnR_gN263yP_oK0gmFf8CHU/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Captain Miller",
      overview:
        "A renegade Captain and his unconventional outlaws execute daring heists in the 1930s and 1940s. Miller must decide whether to continue running or confront the challenges head-on.",
      poster_path: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/gq5OlT5ImxsNpkirpgf4rYngd3M.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/u3lWiLi0e0W3aU822QdcxQIGBES.jpg",
      download_link: "https://drive.google.com/file/d/1-WJ5aRgv30NinWCYOj8EQmMEC-ahTjjD/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Ayalaan",
      overview:
        "A lost alien seeks help from four friends to get back to his home planet, while a group of hostile scientists tries to capture it.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/8nryykQqfU7yqTz4FD7uEBjseZp.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/edF35dA59ltU0dZdCJ66M9TBrp5.jpg",
      download_link: "https://drive.google.com/file/d/1198ztKFCOFbwFF4ZV__kr4YSl1dPQc2c/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Saba Nayagan",
      overview:
        "Arrested for nuisance, Saba spins breakup tales to melt a sympathetic cop, hoping to charm his way out.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/uYIw5Jt4xkcjObDwJqcgeLFP042.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/xf0Dg2NX6rnAfOPveP8Kp2v14G6.jpg",
      download_link: "https://drive.google.com/file/d/12DsJte2bRVESc40T1-mV1FmkZNxu3OnL/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Fight Club",
      overview:
        "An aspiring footballer's life is upended when his mentor is murdered. Entangled in revenge and power games, he tries to seize control of his destiny in time.",
      poster_path: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/1h6t9nCYVWOLRskB35K51payMok.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/nlDmuxSjJS1Fi2FgVToPm9ytm5S.jpg",
      download_link: "https://drive.google.com/file/d/11gEUcM7UgcxW6lHn2uToRY31JUdwtVfC/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Parking",
      overview:
        "A parking spot frays the relationship between two neighbors of different generations and worldviews.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/glgCXwJMd9IHSLBocsr8N1te3Sf.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/rIOjUd2fUazYTcnEfGLgSjG8i4m.jpg",
      download_link: "https://drive.google.com/file/d/11gNzculKcX37sbe978TUCxr0WBxIx7Mz/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Leo",
      overview:
        "Things start to take an awry turn for a mild-mannered cafe owner, who gets caught in the crosshairs of a drug cartel.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/pljRizZMI0RZ9dJEdSwqCRfYtr.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/jpuhJikambSdHYf18OE6706yJkc.jpg",
      download_link: "https://drive.google.com/file/d/118piJq67i98QQntoNdUpSrzXZ-4sRPAW/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Vikram",
      overview:
        "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/1GGc5XXaFgNBoJnOEBJCnXSMwhx.jpg",
      download_link: "https://drive.google.com/file/d/11YywkDAwIiaZpA4_e_8bkK95P5VogLb8/view?usp=drivesdk",
    },
    {
      id:  generaterandomid(4),
      title: "Mark Antony",
      overview:
        "Mark, the son of a former gangster, comes across a mobile phone that can time-travel. Using the phone, Mark acquires the ability to save his estranged mother from a grim fate but with dangerous consequences.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/3xz1lfMrFlNtZ4H8DQKvYog8ilR.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/q8cXWpngGo5rYz2lkGJc5GiKcmL.jpg",
      download_link: "https://drive.google.com/file/d/12RcMIOMeERl-JFMI370bR3rd6R8zD5FU/view?usp=drivesdk",
    },
  {
      id:  generaterandomid(4),
      title: "Blue Star",
      overview:
        "Ranjith and Rajesh, cricket captains from Arakkonam, India, ignite a rivalry that ruins their chances of playing when politics interferes.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/8agxJ2Wv8EitO1xwF2HgxnyloCI.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/rPJzSvaOcssRPegJkKS7UVa8Ib3.jpg ",
      download_link: "https://drive.google.com/file/d/1-BvfopnKbv4KaKGs_1phn1T6WN_XShsP/view?usp=drivesdk",
    },
  {
      id:  generaterandomid(4),
      title: "Singapore Saloon ",
      overview:
        "A local barber inspires a young man to become a hairstylist.",
      poster_path: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/x6AxOaH0BiWJZkgAzeunHe3ZCLG.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/5WWuqrJm9MScRpP0WnT5PQrUe17.jpg",
      download_link: "https://drive.google.com/file/d/10ka9V_3QQPX-eMwi6SXclOK9zG2DcARM/view?usp=drivesdk",
    },{
      id:  generaterandomid(4),
      title: "Salaar: Part 1 ",
      overview:
        "A gang leader makes a promise to a dying friend by taking on other criminal gangs.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/2G1C677cokQKFHbUKG9sVlIGOiX.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/hOx2kPyniEHJj9wquzJMuStFFUG.jpg",
      download_link: "https://drive.google.com/file/d/12QFRSov7PyaixbUjncO6ThFfNXu54Rei/view?usp=drivesdk",
    },
  
  ];
  

  const vijayhits = [
    {
      id:  generaterandomid(4),
      title: "Leo",
      overview:
        "Things start to take an awry turn for a mild-mannered cafe owner, who gets caught in the crosshairs of a drug cartel.",
      poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/pljRizZMI0RZ9dJEdSwqCRfYtr.jpg",
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/jpuhJikambSdHYf18OE6706yJkc.jpg",
      download_link: "https://drive.google.com/file/d/118piJq67i98QQntoNdUpSrzXZ-4sRPAW/view?usp=drivesdk",
    },{
      id: generaterandomid(4) ,
      title: "Master",
      overview:
        "An alcoholic professor is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg',
      background_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztGICjmH3N6cPAmJKL9EwktTGOpnPp-_9k8UnOJkuew&s",
      download_link: "",
    },{
      id: generaterandomid(4) ,
      title: "Beast",
      overview:
        "Former RAW agent Veera must face his fears when a terrorist organisation holds him hostage in a mall along with other visitors and demands the release of their leader, who was captured by Veera.",
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Beast_2022_Indian_poster.jpg',
      background_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lqz3fbJV_eB_-Oy2bWOODoJ4zhr8a1yTF1uS8nB8Cw&s",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },
   {
      id: generaterandomid(4),
      title: "Varisu",
      overview:
        "The story revolves around the prodigal son of a business tycoon who agrees to take over the business, but must prove himself to be a worthy successor.",
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/a/af/Varisu_poster.jpg?20230109020753',
      background_path: "https://imgs.search.brave.com/B3cKwjzZ_0SihhgB-lZmOkMurvdj0wvtmPof1FTTkHY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL3Rl/Y2gvaW1nLzIwMjMv/MDIvMjMvOTYweDU0/MC92YXJpc3VfMTY3/NDQ1MzM4ODQ2MF8x/Njc3MTM5MTI2MzUz/XzE2NzcxMzkxMjYz/NTMuanBn",
      download_link: "https://drive.google.com/file/d/139iksBu_54wMH4QbpRaTeyIkLyEBq8EH/view?usp=drivesdk",
    },{
      id:generaterandomid(4) ,
      title: "Bigil",
      overview:
        "Years after a tragedy compelled Michael 'Bigil' Rayappan to give up a promising career in football, destiny presents him with an opportunity to pursue his passion for the sport as the coach of the women's team..",
        poster_path: 'https://m.media-amazon.com/images/M/MV5BNTNjNTNmMzQtYTcyYS00ZmY1LWJjMWYtMDFjZWJjNDQ2OGE1XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_QL75_UY562_CR14,0,380,562_.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/cc14e095w0ri6ppoLxSEl7iUqHs.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },
  {
      id: generaterandomid(4),
      title: "Sarkar",
      overview:
        "NRI corporate Sundar Ramasamy comes to India to vote, only to learn that his vote has already been cast. While he reclaims his right legally, it also sets in motion a chain of events that eventually lead to him entering the political fray, trying to change the system.",
        poster_path: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/6uF4MtjUuee9CrlzMr4u9bzEz7P.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/v9CTg2i5d5oLMRIHAOOgFkxcJou.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },{
      id:  generaterandomid(4),
      title: "Mersal",
      overview:
        "A few individuals in the medical profession are murdered or kidnapped, and the cop investigating the case suspects a doctor and arrests him. But is he the one who is behind these crimes? And why are they being committed?.",
        poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/65Q1wpRPZ5E3UVUv2V5JBbJQCcj.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/rx9kyO6YJLpXfFrU934C6i4yYMj.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },{
      id:  generaterandomid(4),
      title: "Theri",
      overview:
        "When an honest cop, Vijay Kumar's family is ruthlessly slaughtered by a politician and his aides, he decides to change his identity and commits his life to bring his daughter up in a serene atmosphere. But some freak events end up compromising his identity and what he does to save his daughter and avenge the death of his family unfurls as Theri",
        poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/f6BhexotEqO3GejXa3FopBNGL6M.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/yzoyr6nuB3ChA38MSHjYKlMpU6W.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },{
      id:  generaterandomid(4),
      title: "Kaththi",
      overview:
        "Kathiresan aka Kaththi, a criminal, escapes from the Kolkata prison and comes to Chennai, where he comes across his doppelganger Jeevanandham, fighting for his life after being shot at by unknown men. Kathir decides to pass off as Jeeva and make away with a lump sum amount but once he realizes who Jeeva really is, Kathir turns a crusader.",
        poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/3Zp3VCEzDJGHwvMT7pXkPj2vuYm.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/iOnnXN8XPMWrh7flteI1mCftYBZ.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },{
      id:  generaterandomid(4),
      title: "Jilla",
      overview:
        "A cop decides to take on his godfather, who raised him from childhood, and make him realize the error of his ways.",
        poster_path: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/kUBsvLoyzgxTqTvuiE0PmJHpsRU.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/n06GR0Jmd1gwglNVKdyJIphQG3d.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },{
      id:  generaterandomid(4),
      title: "Thuppakki",
      overview:
        "An army captain is on a mission to track down and destroy a terrorist gang and deactivate the sleeper cells under its command.",
        poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/uTQNCqMnSDbZghFYNmzDvTVD413.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/itm6HknrBWGTAicBITeqEThIrQw.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },{
      id:  generaterandomid(4),
      title: "Nanban",
      overview:
        "The plot of the film illustrates the embankment of two friends on a quest for a lost buddy, who was once an optimistic and successful student. On their journey, they recount their college life and special moments that the three shared up until their lost friend secretly parted ways after convocation. During their quest, the two encounter a rival classmate who once made a long forgotten bet with them, a funeral that goes impossibly out of control, and a wedding they must crash..",
        poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/dmhPnvYQVtx4xS1dkA9trCpQXvY.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/gTK2lEyMSFxKsA52uEYLQlmpAWu.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },{
      id:  generaterandomid(4),
      title: "Ghilli",
      overview:
        "Muthu Pandi, a village strongman, decides to marry Dhanalakshmi, and begins his quest by eliminating everyone who opposes their union - starting with both her brothers. In desperation, Dhanalakshmi decides to escape from the village, and in the process is unwittingly assisted by a university Kabaddi player Velu.",
        poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/mwXyBxPH6e7GgDdNicmalX1V9GI.jpg',
      background_path: "https://media.themoviedb.org/t/p/w500_and_h282_face/y9uoFHBYjkMLMfYKtuDrB9i2yej.jpg",
      download_link: "https://drive.google.com/file/d/134kz8gYBPksdC5AmFnXyhmT_dxOMm8I_/view?usp=drivesdk",
    },
  ]
    


app.get('/api/movies', (req,res)=>{
    res.json(movies);


  })
  
   app.get('/api/movies/:id', (req, res) => {
    const { id } = req.params;
   
    const movie = movies.find((m) => m.id === id);
  
    if (!movie) {
     
      return res.status(404).json({ error: 'Movie not found' });
    }
  
 
  
    res.json(movie);
  });
  
  app.get('/api/vijayhits', (req, res) => {
    res.json(vijayhits);
  });
  
  app.get('/api/vijayhits/:id', (req, res) => {
    const { id } = req.params;
    const Vijay = vijayhits.find((v) => v.id === id);
  
    if (!Vijay) {
      return res.status(404).json({ error: 'Movie not found' });
    }
  
    res.json(Vijay);
  });
  
 

  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {

    console.log(`server listening on port : ${PORT}`)

  });


