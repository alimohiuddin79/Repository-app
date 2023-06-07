// the folder name is the api route example: /api/hello
// the file name is should be route.js
// the function name should be http methods GET, POST, PUT, DELETE
export async function GET(request) {
  return new Response('Hello, Next.js!')
}
