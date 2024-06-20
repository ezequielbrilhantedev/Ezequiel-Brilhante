export async function GET() {
  const res = await fetch(
    'https://api.vercel.com/v9/projects',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      },
    }
  );
  const data = await res.json();

  return Response.json(data);
}
