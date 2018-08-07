

const url = "https://publist.ai/api/v2/jobs.frontend";
const apiKey = process.env.apiKey;
// const apiKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJFZCBIbyIsImVtYWlsIjoiZWRtdW5kaG85QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJlbWFpbF92ZXJpZmljYXRpb25fY29kZSI6IjUwMzc1MyIsInBhc3N3b3JkIjoiJDJhJDEwJEVxVXBORmhPN2p4Sm8yNXlTQ0RMcnVoY2ZzTC42WThPS01BRDBGVUhLZWk5SjBYVzJsbUNXIiwicGVybWlzc2lvbnMiOm51bGwsInRpbWV6b25lIjoiQW1lcmljYS9Mb3NfQW5nZWxlcyIsImlwX2FkZHJlc3MiOiIxMi4yMy41Ni45OC8zMiIsIm9wdGlvbnMiOnt9LCJtZXRhZGF0YSI6e30sImxhc3RfbG9naW4iOiIyMDE4LTA4LTAxVDIyOjA5OjMzLjMyOVoiLCJsYXN0X2FjdGl2ZSI6IjIwMTgtMDgtMDFUMjI6MDk6MzMuMzI5WiIsInVwZGF0ZWQiOiIyMDE4LTA4LTAxVDIyOjA5OjMzLjMyOVoiLCJjcmVhdGVkIjoiMjAxOC0wOC0wMVQyMjowOTozMy4zMjlaIiwiaWF0IjoxNTMzMTYxMzc1LCJleHAiOjE1MzQzNzA5NzV9.1D5Z7hsTLrHMtXsXEO88Em31lchTVtvVt9tSfS_E5AM";

export const queryData = () => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      'Authorization': 'Bearer ' + apiKey,
    },
    body: '{"query": "tech"}'
  })
    .then(res => res.json())
    .catch(error => console.log('Error:', error))
    // .then(response => console.log('Success:', response.data));
    .then(response => response.data);
};
