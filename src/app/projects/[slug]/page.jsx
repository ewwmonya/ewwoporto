import { client } from '@/sanity/client';

const page = async ({ params }) => {
	const { slug } = params;
	const project = await client.fetch(
		`*[_type == "Project" && _id == '${slug}']`
	);

	return (
		<main className='mt-16 px-8 lg:px-32 min-h-[85vh] mb-16'>
			{project.map((data) => {
				return (
					<div className='min-h-[35vh] grid lg:grid-cols-2 gap-4'>
						{/* left side */}
						<div className='h-full bg-base-300'>
							{/* left side */}
							Monya
						</div>
						{/* left side */}
						<section className=''>
							<div className='grid gap-4'>
								<h1 className='text-4xl'>{data.title}</h1>
								<p className='leading-8'>{data.shortDescription}</p>
								<p className=''>
									<span className='font-bold'>Tech Used: </span>
									React Edit This
								</p>
							</div>
							<div className='grid gap-8 p-4'>
								<button className='btn btn-accent'>View Site</button>
								<button className='btn'>View Github</button>
							</div>
						</section>
						<div className='grid col-span-2 mt-24'>
							<h3>Title</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Tempora consequatur saepe consequuntur expedita doloremque minus
								earum consectetur reiciendis architecto, temporibus in! Id sed
								repellendus vero nisi, culpa hic laboriosam libero! Ex libero
								pariatur quod distinctio minima minus adipisci iusto qui, eum
								voluptates nostrum magnam beatae? Assumenda labore dolores earum
								ullam aliquam. Sed sint, sit dolorem eius enim natus voluptate
								adipisci! Sunt saepe velit, voluptatum officiis neque ipsa
								itaque asperiores facilis ex quia. Iure dolorum neque minus
								illum perferendis. Tempore delectus recusandae sequi. Incidunt
								amet at aut consectetur necessitatibus tempora sequi.
							</p>
							<h3>Title</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Tempora consequatur saepe consequuntur expedita doloremque minus
								earum consectetur reiciendis architecto, temporibus in! Id sed
								repellendus vero nisi, culpa hic laboriosam libero! Ex libero
								pariatur quod distinctio minima minus adipisci iusto qui, eum
								voluptates nostrum magnam beatae? Assumenda labore dolores earum
								ullam aliquam. Sed sint, sit dolorem eius enim natus voluptate
								adipisci! Sunt saepe velit, voluptatum officiis neque ipsa
								itaque asperiores facilis ex quia. Iure dolorum neque minus
								illum perferendis. Tempore delectus recusandae sequi. Incidunt
								amet at aut consectetur necessitatibus tempora sequi.
							</p>
							<h3>Title</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Tempora consequatur saepe consequuntur expedita doloremque minus
								earum consectetur reiciendis architecto, temporibus in! Id sed
								repellendus vero nisi, culpa hic laboriosam libero! Ex libero
								pariatur quod distinctio minima minus adipisci iusto qui, eum
								voluptates nostrum magnam beatae? Assumenda labore dolores earum
								ullam aliquam. Sed sint, sit dolorem eius enim natus voluptate
								adipisci! Sunt saepe velit, voluptatum officiis neque ipsa
								itaque asperiores facilis ex quia. Iure dolorum neque minus
								illum perferendis. Tempore delectus recusandae sequi. Incidunt
								amet at aut consectetur necessitatibus tempora sequi.
							</p>
							<h3>Title</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Tempora consequatur saepe consequuntur expedita doloremque minus
								earum consectetur reiciendis architecto, temporibus in! Id sed
								repellendus vero nisi, culpa hic laboriosam libero! Ex libero
								pariatur quod distinctio minima minus adipisci iusto qui, eum
								voluptates nostrum magnam beatae? Assumenda labore dolores earum
								ullam aliquam. Sed sint, sit dolorem eius enim natus voluptate
								adipisci! Sunt saepe velit, voluptatum officiis neque ipsa
								itaque asperiores facilis ex quia. Iure dolorum neque minus
								illum perferendis. Tempore delectus recusandae sequi. Incidunt
								amet at aut consectetur necessitatibus tempora sequi.
							</p>
						</div>
					</div>
				);
			})}
		</main>
	);
};
export default page;
