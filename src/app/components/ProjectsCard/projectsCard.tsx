import Image from 'next/image';
import Link from 'next/link';

async function getAllProjects() {
  const response = await fetch(
    'https://api.vercel.com/v9/projects',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer Jb5f8GS2d4WzmAi0irQIsk6J`,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export async function ProjectsCard() {
  const projects = await getAllProjects();
  console.log(projects);
  return (
    <>
      <div className="mobile:grid mobile:px-5 flex gap-5">
        <div>
          <Link
            href="https://github.com/ezequielbrilhantedev/devstore"
            target="_blank"
            className="group relative"
          >
            <Image
              src="/devStore.png"
              width={390}
              height={47}
              quality={100}
              alt=""
              className="rounded-2xl cursor-pointer group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/ezequielbrilhantedev/DT-Money"
            target="_blank"
            className="group relative"
          >
            <Image
              src="/DTMoney2.png"
              width={390}
              height={20}
              quality={100}
              alt=""
              className="rounded-2xl cursor-pointer group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
      </div>
      <Link
        href="https://github.com/ezequielbrilhantedev"
        className="group relative"
      >
        <h1 className="text-violet-400 font-extrabold text-base  group-hover:scale-105 transition-transform duration-500">
          Veja mais em meu GitHub
        </h1>
      </Link>
    </>
  );
}
function api(arg0: string) {
  throw new Error('Function not implemented.');
}
