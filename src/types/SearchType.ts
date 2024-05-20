export interface ResponseApiType {
  continuation:     string;
  estimatedResults: string;
  data:             DataType[];
  msg:              string;
  refinements:      string[];
}

export interface DataType {
  type:               string;
  channelId?:         string;
  title:              string;
  channelTitle?:      string;
  description?:       string;
  thumbnail?:         Thumbnail[];
  videoCount?:        string | null;
  subscriberCount?:   string;
  videoId?:           string;
  channelThumbnail?:  Thumbnail[];
  viewCount?:         string;
  publishedTimeText?: string;
  publishDate?:       string;
  publishedAt?:       string;
  lengthText?:        string;
  badges?:            string[];
  richThumbnail?:     Thumbnail[] | null;
  data?:              DataShort[];
  channelHandle?:     string;
}

export enum Badge {
  Cc = "CC",
  New = "New",
  The4K = "4K",
}

export interface Thumbnail {
  url:    string;
  width:  number;
  height: number;
}

export interface DataShort {
  type:                  string;
  videoId:               string;
  title:                 string;
  viewCountText:         string;
  thumbnail:             Thumbnail[];
  isOriginalAspectRatio: boolean;
  params:                string;
  playerParams:          string;
  sequenceParams:        string;
}

export enum Params {
  CBQwAkoiChAIDm1HcmkgZmVybmFuZGV6Eg5TYXJpIGZlcm5HbmRleg3D3D = "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
}

export enum ShortType {
  Shorts = "shorts",
}

export enum SearchResponseType {
  Channel = "channel",
  ShortsListing = "shorts_listing",
  Video = "video",
}


export const videoData: ResponseApiType = {
  "continuation": "EskDEg5tYXJpIGZlcm5hbmRlehq2A1NCU0NBUmhWUXpSSFVXTndVM2hZYlhab2FtNDRZa0ZtVlhWaVoyZUNBUXR2TkZOSldGWXpUMHRsV1lJQkMwc3hjRlpmUTBFeVlWVkZnZ0VhVWtSRlRVbEphek5tT0daT09WUk5ObmxzUzNCRlRsZzVhM2VDQVF0UldVWnZlRVZwYTJWNk5JSUJDMkpJVkRWSGRsbHBObWx2Z2dFTGNtWnJXR2RpZVMxNGJqQ0NBUXR3YzJSYVVtZG5URGRqU1lJQkMwcFVhV0pUUkRBMFNWOXZnZ0VMVG1kWWN6WlZRMDFDVURDQ0FRdFRkbGRSV21aRlYwRXdjNElCQzNCR1ZXTkJZWFJUYUV4cmdnRUxZV1k0Wm1SaVlVSTRTbG1DQVF0Tk0zZFFiQzB5U0hkT2Q0SUJDMDU0T0daeWVIUjVNekZWZ2dFTFMzUlpRVGhtVEd3dFZtZUNBUXMxUlhWMlRFcFFUM1ZMYjRJQkMyTXRPVXRMVVZnMGRuZEJnZ0VMVDA4eGJraE1OekJ4UlVXQ0FRdFlWRlZzTjNOb00zRjJVYklCQmdvRUNCb1FBdW9CQkFnQ0VESSUzRBiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D.CgtWdWRTYnBkSDlYYyiziqqyBjIKCgJERRIEEgAgTw%3D%3D",
  "estimatedResults": "5271214",
  "data": [
    {
      "type": "channel",
      "channelId": "UC4GQcpSxXmvhjn8bAfUubgg",
      "title": "Mari Fernandez",
      "channelTitle": "Mari Fernandez",
      "description": "Canal oficial da Mari Fernandez no Youtube! Shows: (85) 9.9979.3021 Siga a Mari Fernandez nas redes sociais! Siga no ...",
      "thumbnail": [
        {
          "url": "//yt3.googleusercontent.com/jLs35-ib9rrxabBp2Efj5O3eyLn6jo9NU0TXSEIzrdVABsM3dzKnnMS5ElL6N9fNcVAbO99fbg=s88-c-k-c0x00ffffff-no-rj-mo",
          "width": 88,
          "height": 88
        },
        {
          "url": "//yt3.googleusercontent.com/jLs35-ib9rrxabBp2Efj5O3eyLn6jo9NU0TXSEIzrdVABsM3dzKnnMS5ElL6N9fNcVAbO99fbg=s176-c-k-c0x00ffffff-no-rj-mo",
          "width": 176,
          "height": 176
        }
      ],
      "videoCount": null,
      "subscriberCount": "2.29M"
    },
    {
      "type": "video",
      "videoId": "o4SIXV3OKeY",
      "title": "Mari Fernandez - PÁGINA DE EX (Mari No Barzinho)",
      "channelTitle": "Mari Fernandez",
      "channelId": "UC4GQcpSxXmvhjn8bAfUubgg",
      "channelThumbnail": [
        {
          "url": "https://yt3.ggpht.com/jLs35-ib9rrxabBp2Efj5O3eyLn6jo9NU0TXSEIzrdVABsM3dzKnnMS5ElL6N9fNcVAbO99fbg=s88-c-k-c0x00ffffff-no-rj",
          "width": 68,
          "height": 68
        }
      ],
      "description": "Contato Para Shows e Publicidades | Enderson Duarte - 85 9.9979-3021 Ouça 'Mari No Barzinho (Ao Vivo No RJ)' nas ...",
      "viewCount": "10803468",
      "publishedTimeText": "3 weeks ago",
      "publishDate": "2024-04-28",
      "publishedAt": "2024-04-28T00:00:00Z",
      "lengthText": "2:42",
      "badges": [
        "4K"
      ],
      "thumbnail": [
        {
          "url": "https://i.ytimg.com/vi/o4SIXV3OKeY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEblMOwPwawTQWc-zYCh0ZeXk-xQ",
          "width": 360,
          "height": 202
        },
        {
          "url": "https://i.ytimg.com/vi/o4SIXV3OKeY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDthOXd2mU46aeN0mZQrviRvALF_Q",
          "width": 720,
          "height": 404
        }
      ],
      "richThumbnail": [
        {
          "url": "https://i.ytimg.com/an_webp/o4SIXV3OKeY/mqdefault_6s.webp?du=3000&sqp=CMzJqbIG&rs=AOn4CLD50PPWFd5-n9_ygziDV3NJ7zJkrw",
          "width": 320,
          "height": 180
        }
      ]
    },
    {
      "type": "video",
      "videoId": "K1pV_CA2aUE",
      "title": "DIZEM QUE SOU LOUCA - Mari Fernandez (Clipe Oficial)",
      "channelTitle": "Mari Fernandez",
      "channelId": "UC4GQcpSxXmvhjn8bAfUubgg",
      "channelThumbnail": [
        {
          "url": "https://yt3.ggpht.com/jLs35-ib9rrxabBp2Efj5O3eyLn6jo9NU0TXSEIzrdVABsM3dzKnnMS5ElL6N9fNcVAbO99fbg=s88-c-k-c0x00ffffff-no-rj",
          "width": 68,
          "height": 68
        }
      ],
      "description": "Letra: Dizem que sou louca, fora de controle Que você controla todos os meus sentidos Que me afastei de todos, que nem ligo ...",
      "viewCount": "15529060",
      "publishedTimeText": "1 month ago",
      "publishDate": "2024-04-19",
      "publishedAt": "2024-04-19T00:00:00Z",
      "lengthText": "3:16",
      "badges": [
        "4K"
      ],
      "thumbnail": [
        {
          "url": "https://i.ytimg.com/vi/K1pV_CA2aUE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGotVH3uy3LlR_jx7FxvQ9ijcKrA",
          "width": 360,
          "height": 202
        },
        {
          "url": "https://i.ytimg.com/vi/K1pV_CA2aUE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQmZac_H5aJXwaZDbSOYBgt_EJjw",
          "width": 720,
          "height": 404
        }
      ],
      "richThumbnail": [
        {
          "url": "https://i.ytimg.com/an_webp/K1pV_CA2aUE/mqdefault_6s.webp?du=3000&sqp=CPjuqbIG&rs=AOn4CLA_03Pw4C0iMuSwtjmLbv_9jE79Cg",
          "width": 320,
          "height": 180
        }
      ]
    },
    {
      "type": "shorts_listing",
      "title": "Latest Shorts from Mari Fernandez",
      "data": [
        {
          "type": "shorts",
          "videoId": "rA5KPuWbq-o",
          "title": "Só os de verdade amanhecem sem limitez no Mari Sem Fim! 😂🫶",
          "viewCountText": "30K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/rA5KPuWbq-o/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jviQAUBdcFNwpPyX_2qaxNW",
          "sequenceParams": "CgtyQTVLUHVXYnEtbyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAAGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "8ZREJDXxlEI",
          "title": "Amor não te quero mais é tarde pra se arrepender… 🎶Amo a energia de vocês cantando essa tão alto 🥹",
          "viewCountText": "64K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/8ZREJDXxlEI/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtUeoJf7wrWxDMSxbRBeOtg",
          "sequenceParams": "Cgs4WlJFSkRYeGxFSSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxABGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "G_5DawkX4Xs",
          "title": "Olha só o que achei aqui na minha galeria de vídeos ❤️ Lindo demais! Obrigada por tanto 🥹",
          "viewCountText": "26K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/G_5DawkX4Xs/frame0.jpg",
              "width": 576,
              "height": 1024
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jvUgnqNHLXFVd02sOcF9dMd",
          "sequenceParams": "CgtHXzVEYXdrWDRYcyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxACGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "HEG1y_PRfWM",
          "title": "Sextou e hoje eu quero amor e put4ria 🔥🙈💜fala aí no comentário oq tu quer... ⬇️⬇️",
          "viewCountText": "57K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/HEG1y_PRfWM/frame0.jpg",
              "width": 576,
              "height": 1024
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jsk7P_AWhL3rH6flYvDn22U",
          "sequenceParams": "CgtIRUcxeV9QUmZXTSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxADGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "AuB0hvwlVnQ",
          "title": "#tbt de hoje, hein? 😍 quem lembra dessa no repertório? Vocês amaram muito ❤️🫶🏼",
          "viewCountText": "24K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/AuB0hvwlVnQ/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtEtY2tGWZ-UrjFJA_ss_jf",
          "sequenceParams": "CgtBdUIwaHZ3bFZuUSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAEGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "pPCYGW7Lecw",
          "title": "Se der saudade, me liga 🎵❤️ #tbt",
          "viewCountText": "26K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/pPCYGW7Lecw/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jvLVCO6SPaD70itpDfcwxUP",
          "sequenceParams": "CgtwUENZR1c3TGVjdyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAFGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "hYz0yVp930s",
          "title": "Deu saudade do inicio de tudo “Velha Infância” um dos sucessos do nosso repertório, quem lembra? ❤️",
          "viewCountText": "21K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/hYz0yVp930s/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-ju1QxzztMtiz693I4btuY8s",
          "sequenceParams": "CgtoWXoweVZwOTMwcyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAGGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "Sv7qLAGX828",
          "title": "Vai me levar a sério ou só quer sarra sarradinha 🤪 Novo modelo disponivel lá no Capcut! Usem mt 🫶",
          "viewCountText": "22K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/Sv7qLAGX828/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jsMoDOr7Sxf5KvqYKaUlw-g",
          "sequenceParams": "CgtTdjdxTEFHWDgyOCqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAHGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "XIpBNanJHg0",
          "title": "Sarradinha já tá disponível 🤪❤️ ouça agora! #marifernandez #sarradinha",
          "viewCountText": "16K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/XIpBNanJHg0/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtEivNWxJ72UTC6KDeoWUGZ",
          "sequenceParams": "CgtYSXBCTmFuSkhnMCqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAIGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "hkF-OOaHJ9M",
          "title": "O dia que eu mostrei “Sarradinha” pela primeira vez para todo mundo da banda. 😂❤️😈 Tá chegandoooo",
          "viewCountText": "29K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/hkF-OOaHJ9M/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jscd0HffXiE1xkwnbVaby7S",
          "sequenceParams": "Cgtoa0YtT09hSEo5TSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAJGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "GEi9pvw0Afs",
          "title": "“Depois de Você” já está DISPONÍVEL galera! 💜 Bora sextar assistindo esse vídeo?!",
          "viewCountText": "54K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/GEi9pvw0Afs/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jsteSbP_p_rqh24kz26vGka",
          "sequenceParams": "CgtHRWk5cHZ3MEFmcyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAKGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "SKHVRK0N1BY",
          "title": "Ah é? Quem disse que eu não posso?  😂🔥",
          "viewCountText": "24K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/SKHVRK0N1BY/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jsM8bLZdiu2amTHB2e1E6Kg",
          "sequenceParams": "CgtTS0hWUkswTjFCWSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxALGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "8UYxARRx07I",
          "title": "Esse seu rolo, vai durar até quando... 🎶 Quantas vezes você já escutou \"Cê Nem Me Superou\" hoje? 👀🔥",
          "viewCountText": "26K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/8UYxARRx07I/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jsCuPUL6L8chzMjPvaMeOyS",
          "sequenceParams": "Cgs4VVl4QVJSeDA3SSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAMGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "ywUg6CV--ik",
          "title": "Foi lindo demais, Barretos! ❤️ Não sei nem o que falar, só agradecer 😍😍",
          "viewCountText": "29K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/ywUg6CV--ik/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-juoE1-eDYjFZvse6NDgHV8M",
          "sequenceParams": "Cgt5d1VnNkNWLS1payqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxANGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "d2RUFQe5NTY",
          "title": "Fez amor, mas não fez as pazes 💘✍🏻  - MAIS UM MARI COMPONDO NA ESTRADA 📝",
          "viewCountText": "32K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/d2RUFQe5NTY/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtB-aLr5nVbMkZINOIHml4b",
          "sequenceParams": "CgtkMlJVRlFlNU5UWSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAOGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "5R9Q_5WeeXc",
          "title": "Galerinha, no #marisemfim de Fortaleza eu gravei “Ce Nem Me Superou” com meu amigo Mateus Ximenes 💜",
          "viewCountText": "23K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/5R9Q_5WeeXc/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtRC3ZMXwHIRnWx4nm2rmfm",
          "sequenceParams": "Cgs1UjlRXzVXZWVYYyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAPGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "d0DqI7vGo6s",
          "title": "19h no meu canal do YouTube tá chegando o vídeo dessa minha música, meus amores💜",
          "viewCountText": "22K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/d0DqI7vGo6s/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jsEK77fCxpj1e_MIjSzV0xO",
          "sequenceParams": "CgtkMERxSTd2R282cyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAQGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "jlvVSzgYH3U",
          "title": "Quem vai sextar comigo ao som de “Tu não quer me amar”? Estreia às 19h no meu canal, não vai perder!",
          "viewCountText": "14K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/jlvVSzgYH3U/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtDdnov-Xxo4lqpTJ0RcB2k",
          "sequenceParams": "CgtqbHZWU3pnWUgzVSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxARGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "BtsabBBHup0",
          "title": "“Bloqueadim” é a indireta perfeita pra mandar para a pessoa que resolveu voltar depois da revoada 👀",
          "viewCountText": "38K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/BtsabBBHup0/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtU1Uc1YDu0r1PRPWZ-pJjl",
          "sequenceParams": "CgtCdHNhYkJCSHVwMCqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxASGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "xkhJCQ7s47c",
          "title": "Na minha cama tu tá bloqueadim… 🎶Acabou de estrear o video clipe de “Bloqueadim” assista agora!",
          "viewCountText": "33K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/xkhJCQ7s47c/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtmkN4cmnrXfL6JEV1W61RH",
          "sequenceParams": "Cgt4a2hKQ1E3czQ3YyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxATGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "OcyfSaQIxzQ",
          "title": "Conta pra mim, qual é a sua favorita do DVD? 👀",
          "viewCountText": "10K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/OcyfSaQIxzQ/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jslCVfS-4hapR4ekCXSscKe",
          "sequenceParams": "CgtPY3lmU2FRSXh6USqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAUGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "UnVD0jAA5fg",
          "title": "Essa música é perfeita para você mandar para aquela sua amiga que só pega boy Frouxo 😂🔥🎶🤦\u200d♀️🤷\u200d♀️",
          "viewCountText": "27K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/UnVD0jAA5fg/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtPwWzSUNemv9QhTaoqh5L2",
          "sequenceParams": "CgtVblZEMGpBQTVmZyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAVGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "woVvJyyjzik",
          "title": "Avisa que eu voltei, Campina Grande! 😍😍 E que prazer estar de volta, viu?",
          "viewCountText": "40K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/woVvJyyjzik/frame0.jpg",
              "width": 1080,
              "height": 1906
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-juKOVDZDbe1GDhA1Um82LqW",
          "sequenceParams": "Cgt3b1Z2Snl5anppayqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAWGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "ivaKZNERlCg",
          "title": "POV: você veio no meu show e quando cantei “Frouxo” você lembrou de alguém 👀",
          "viewCountText": "21K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/ivaKZNERlCg/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jvqJQw7hUYNE8um0zk1or7L",
          "sequenceParams": "CgtpdmFLWk5FUmxDZyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAXGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "I_4DfZakPew",
          "title": "200M de visualizações? Isso é uma Parada Louca! Muito obrigada e continuem curtindo esse hit 🫶🏻🎶",
          "viewCountText": "12K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/I_4DfZakPew/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-juePDG9oZLPm3n3G8hTPUqP",
          "sequenceParams": "CgtJXzREZlpha1BldyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAYGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "yWSTbDhQjMI",
          "title": "Se seu amor acabou e tudo esfriou, se eu morri pra você, deixa eu viver... 🎶",
          "viewCountText": "26K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/yWSTbDhQjMI/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtTJL70MdUkgoA6Jy9evrYE",
          "sequenceParams": "Cgt5V1NUYkRoUWpNSSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAZGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "Dfe28w80slc",
          "title": "Deixamos a marquinha do carinho no Hugo e Guilherme no “É Pra Lascar de Beber” em Salvador 😜🍻",
          "viewCountText": "18K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/Dfe28w80slc/frame0.jpg",
              "width": 1080,
              "height": 1920
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtlKi3U3PrylMSLPtfz2jHj",
          "sequenceParams": "CgtEZmUyOHc4MHNsYyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAaGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "OQHSMFMJgYo",
          "title": "🤯🤯🤯 #LoveAbsurdo #MariFernandez #Shorts #Viral #Carnaval #Carnaval2023",
          "viewCountText": "78K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/OQHSMFMJgYo/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-juVKdx0mJfismkgibU3jxaw",
          "sequenceParams": "CgtPUUhTTUZNSmdZbyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAbGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "Ozf-D2_7YCc",
          "title": "Hit é assim, só precisa ouvir uma vez que já sai cantando 🔥 #LoveAbsurdo #Shorts",
          "viewCountText": "67K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/Ozf-D2_7YCc/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-juWd7ehQ0Sbdnz3u2V9T2tq",
          "sequenceParams": "CgtPemYtRDJfN1lDYyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAcGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "8cZFTKsfmfk",
          "title": "Dia 09/02 tem o lançamento do HIT DO ANO 🔥 #LoveAbsurdo #MariFernandez #McDaniel #McRyanSP #Shorts",
          "viewCountText": "49K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/8cZFTKsfmfk/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jvblTNUbnEggz9_8uKN1gry",
          "sequenceParams": "Cgs4Y1pGVEtzZm1mayqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAdGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "JMGKJv0E0Q4",
          "title": "Quem se identifica? ❤️\u200d🔥 #QuandoTemSentimento #MariFernandez #Shorts",
          "viewCountText": "66K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/JMGKJv0E0Q4/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jvvYylGKyY_doaW9DKuKQd1",
          "sequenceParams": "CgtKTUdLSnYwRTBRNCqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAeGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "vCof6rO__es",
          "title": "Vem aí o NOVO DVD DA MARI, dia 22/Mar em São Paulo-SP 😍💜 #MariFernandez #Dvd #SaoPaulo #Shorts",
          "viewCountText": "63K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/vCof6rO__es/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jsyBE7Xl2b00QFrR7SkzM5t",
          "sequenceParams": "Cgt2Q29mNnJPX19lcyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAfGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "Her3tdqZqTs",
          "title": "Essa música é muito especial, e ver vcs cantando é incrível ❤️\u200d🔥 #QuandoTemSentimento #Shorts",
          "viewCountText": "89K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/Her3tdqZqTs/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jvFp3HR8eZiSITJrbQwMByf",
          "sequenceParams": "CgtIZXIzdGRxWnFUcyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAgGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "GZgC0AUKg8Q",
          "title": "Glória Groove 💜 Vou soltar mais conteúdos exclusivos desse dia aqui no #Shorts, fiquem ligados!",
          "viewCountText": "42K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/GZgC0AUKg8Q/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-juPCWjBG5v4iY9MbdFMREe5",
          "sequenceParams": "CgtHWmdDMEFVS2c4USqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAhGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "Vh-QAbNe9Jk",
          "title": "#MúsicaBoa #MultiShow #GloriaGroove #MariFernandez #Shorts",
          "viewCountText": "79K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/Vh-QAbNe9Jk/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jv29WG0AbQBkxIwYXy7yI1b",
          "sequenceParams": "CgtWaC1RQWJOZTlKayqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAiGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "javYYRt0wxI",
          "title": "Primeiro de muitos bastidores, simbora 💜 #Shorts #MariFernandez #GlóriaGroove #MúsicaBoa #Multishow",
          "viewCountText": "92K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/javYYRt0wxI/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jv5JMYQ_lJDSUHu3S-eldgQ",
          "sequenceParams": "CgtqYXZZWVJ0MHd4SSqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAjGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "8JkWwh5gdGg",
          "title": "❤️\u200d🔥 #QuandoTemSentimento #MariFernandez #Shorts",
          "viewCountText": "89K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/8JkWwh5gdGg/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jvluJ4lu8GRTGCMLoHDyRpe",
          "sequenceParams": "Cgs4SmtXd2g1Z2RHZyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAkGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "MRR-a0uaUos",
          "title": "Amo vcs 💜 #Manaus #Amazonas #MariSemFim #MariFernandez #CaoSemDono #ProcuraOutra #Musica #Shorts",
          "viewCountText": "59K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/MRR-a0uaUos/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jtDCLI3nTqZ3IKPIJdJ7jDW",
          "sequenceParams": "CgtNUlItYTB1YVVvcyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAlGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "HiDWx6YTmAo",
          "title": "🎵 QUANDO TEM SENTIMENTO ❤️\u200d🔥 Música nova pra vcs 💜 #MariFernandez #Shorts #Musica",
          "viewCountText": "218K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/HiDWx6YTmAo/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jv_HHS0XJLeRXt1fuVLAOui",
          "sequenceParams": "CgtIaURXeDZZVG1BbyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAmGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        },
        {
          "type": "shorts",
          "videoId": "iyo9jKRDDes",
          "title": "🎵 Só de Imaginar - #marifernandez #zevaqueiro #marifernandes #piseiro #forró #casal #viral #musica",
          "viewCountText": "544K views",
          "thumbnail": [
            {
              "url": "https://i.ytimg.com/vi/iyo9jKRDDes/frame0.jpg",
              "width": 720,
              "height": 1280
            }
          ],
          "isOriginalAspectRatio": true,
          "params": "CBQwAkoiChAiDm1hcmkgZmVybmFuZGV6Eg5tYXJpIGZlcm5hbmRleg%3D%3D",
          "playerParams": "8AEByAMyuAQUogYVAdXZ-jvBf-wY_R0ayFvJbkuXSfs2",
          "sequenceParams": "CgtpeW85aktSRERlcyqABQoNCgtyQTVLUHVXYnEtbwoNCgs4WlJFSkRYeGxFSQoNCgtHXzVEYXdrWDRYcwoNCgtIRUcxeV9QUmZXTQoNCgtBdUIwaHZ3bFZuUQoNCgtwUENZR1c3TGVjdwoNCgtoWXoweVZwOTMwcwoNCgtTdjdxTEFHWDgyOAoNCgtYSXBCTmFuSkhnMAoNCgtoa0YtT09hSEo5TQoNCgtHRWk5cHZ3MEFmcwoNCgtTS0hWUkswTjFCWQoNCgs4VVl4QVJSeDA3SQoNCgt5d1VnNkNWLS1pawoNCgtkMlJVRlFlNU5UWQoNCgs1UjlRXzVXZWVYYwoNCgtkMERxSTd2R282cwoNCgtqbHZWU3pnWUgzVQoNCgtCdHNhYkJCSHVwMAoNCgt4a2hKQ1E3czQ3YwoNCgtPY3lmU2FRSXh6UQoNCgtVblZEMGpBQTVmZwoNCgt3b1Z2Snl5anppawoNCgtpdmFLWk5FUmxDZwoNCgtJXzREZlpha1BldwoNCgt5V1NUYkRoUWpNSQoNCgtEZmUyOHc4MHNsYwoNCgtPUUhTTUZNSmdZbwoNCgtPemYtRDJfN1lDYwoNCgs4Y1pGVEtzZm1mawoNCgtKTUdLSnYwRTBRNAoNCgt2Q29mNnJPX19lcwoNCgtIZXIzdGRxWnFUcwoNCgtHWmdDMEFVS2c4UQoNCgtWaC1RQWJOZTlKawoNCgtqYXZZWVJ0MHd4SQoNCgs4SmtXd2g1Z2RHZwoNCgtNUlItYTB1YVVvcwoNCgtIaURXeDZZVG1BbwoNCgtpeW85aktSRERlcxAnGBQiIgoQIg5tYXJpIGZlcm5hbmRlehIObWFyaSBmZXJuYW5kZXpoAXD___________8B"
        }
      ]
    },
    {
      "type": "video",
      "videoId": "QYFoxEikez4",
      "title": "MARI FERNANDEZ 2024 ( REPERTÓRIO NOVO 2024 ) CD NOVO - MÚSICAS NOVAS",
      "channelTitle": "Música TopTop",
      "channelId": "UC_anvZzRWb5B4VSfq0iFlpw",
      "channelHandle": "@musicatoptop2147",
      "channelThumbnail": [
        {
          "url": "https://yt3.ggpht.com/OM5oLxJsyKC-Vn1VbiSxlOL1L74CbltPOK9Bu940X_Gq_WPNuq5hjHrvyxaEx8t9MyTxsjC8zA=s68-c-k-c0x00ffffff-no-rj",
          "width": 68,
          "height": 68
        }
      ],
      "description": "Quer nos ajudar? Então não esquece de deixar seu like no vídeo e de se inscrever no nosso canal! Participem de nosso grupo lá ...",
      "viewCount": "3033",
      "publishedTimeText": "9 hours ago",
      "publishDate": "2024-05-19",
      "publishedAt": "2024-05-19T00:00:00Z",
      "lengthText": "48:05",
      "badges": [
        "New"
      ],
      "thumbnail": [
        {
          "url": "https://i.ytimg.com/vi/QYFoxEikez4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD32of0BIBleEy063qPrmcUpl5Q6A",
          "width": 360,
          "height": 202
        },
        {
          "url": "https://i.ytimg.com/vi/QYFoxEikez4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuOlohGL-sOVfHq51qUPfckgTz2Q",
          "width": 720,
          "height": 404
        }
      ],
      "richThumbnail": null
    },
    {
      "type": "video",
      "videoId": "bHT5GvYi6io",
      "title": "Israel & Rodolffo, @MariFernandez - Seu Brilho Sumiu  (Let's Bora)",
      "channelTitle": "Israel & Rodolffo",
      "channelId": "UCEseiqihkEymhN3AhcxBPxw",
      "channelThumbnail": [
        {
          "url": "https://yt3.ggpht.com/Q05UcodaYc1ExhagQTEVDvzkH5y7iKMIr3r6rhnkfDZfTZRp95zNdRH7ShG5KcjLdk7ohBty=s88-c-k-c0x00ffffff-no-rj",
          "width": 68,
          "height": 68
        }
      ],
      "description": "SEU BRILHO SUMIU Composição: Davi Marcelo / DJ GG / Marcelo Hoffman / Thauane Fontinelle Álbum: Let's Bora Gênero: ...",
      "viewCount": "285089993",
      "publishedTimeText": "1 year ago",
      "publishDate": "2023-05-19",
      "publishedAt": "2023-05-19T00:00:00Z",
      "lengthText": "2:48",
      "badges": [
        "4K",
        "CC"
      ],
      "thumbnail": [
        {
          "url": "https://i.ytimg.com/vi/bHT5GvYi6io/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBa55fgHYwATPUd1QhAECOQbwrSzA",
          "width": 360,
          "height": 202
        },
        {
          "url": "https://i.ytimg.com/vi/bHT5GvYi6io/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAy3_P6N_APYkuWC3nyU8X-o51vlQ",
          "width": 720,
          "height": 404
        }
      ],
      "richThumbnail": [
        {
          "url": "https://i.ytimg.com/an_webp/bHT5GvYi6io/mqdefault_6s.webp?du=3000&sqp=CIbsqbIG&rs=AOn4CLCSUgC0fpyOLwHUMDN0r_4P5uN32g",
          "width": 320,
          "height": 180
        }
      ]
    },
  ],
  "msg": "",
  "refinements": [
    "mari fernandez 2023",
    "marília mendonça",
    "manu batidão",
    "sertanejo 2024",
    "mari fernandez teu amigo cuidou",
    "canudinho",
    "seu brilho sumiu",
    "mari fernandez 2024",
    "jorge e mateus",
    "israel e rodolffo",
    "daqui pra sempre",
    "maria hernandez",
    "henrique e juliano"
  ]
}