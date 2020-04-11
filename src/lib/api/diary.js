import axios from 'axios';

const fetchPostDiary = async (userId, diary, cb) => {
  try {
    const diaryResponse = await axios({
      method: 'post',
      url: `http://localhost:4000/api/users/${userId}/diaries`,
      data: diary
    });
    const response = await diaryResponse.data;
    cb(response);
  } catch (error) {
    console.log(error);
  }
};

export default fetchPostDiary;
