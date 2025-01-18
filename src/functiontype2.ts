// 함수에는 매개변수와 반환하는것에 타입을 줄 수 가 있다.
function play(musidUrl: string, artist: string): string {
  return musidUrl + "/" + artist;
}

// 함수 전체에 타입을 줄 수 있다. 다만 리턴타입은 화살표로 표시한다
type playFnType = (musicId: string, artist: string) => string;

const playFn: playFnType = (musicId, artist) => {
  return `${musicId}/${artist}`;
};

//선택적 매개변수
// 필수적인 값이 아닐때 사용된다
function broadCastMusic(musicId: string, artist?: string): string {
  if (artist) {
    return `${musicId}/${artist}`;
  }

  return musicId;
}

broadCastMusic("musicid00000");
broadCastMusic("musicid00000", "artist");

//기본값 초기화
// 기본값을 초기화 하고 싶을때 사용된다
// 기본값에 따라 타입추론이 가능하다
function broadCastMusicInfo(musicId: string, artist = "none"): string {
  return musicId + "/" + artist;
}
broadCastMusicInfo("musicid0000");

// 나머지 매개변수
// 필수와 나머지 변수를 여러개 받을때
function restOfArtist(artist1: string, ...artist: string[]): string {
  return artist1 + "/" + artist.join("");
}
restOfArtist("music1", "artist2", "artist3");

broadCastMusicInfo("music_00001", "none1");

interface HistoryItem {
  category: string;
  date: string;
}

interface History {
  category: string[];
  history: HistoryItem[];
  addHistory(this: History): () => HistoryItem;
}

const historyHealth: History = {
  category: ["hungerpain", "headache"],
  history: [
    {
      category: "hungerpain",
      date: "2025-01-18",
    },
    {
      category: "headache",
      date: "2025-01-19",
    },
  ],
  addHistory: function (this: History) {
    return () => {
      const date = new Date();
      const yyyy = date.getFullYear();
      const mm =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : `0${date.getMonth() + 1}`;
      const dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

      return {
        category: this.category[0],
        date: `${yyyy}-${mm}-${dd}`,
      };
    };
  },
};

const add = historyHealth.addHistory();
const { category, date } = add();
console.log(category, date);

export {};
