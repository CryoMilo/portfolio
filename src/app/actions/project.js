"use server";

import { createClient } from "../utils/supabase/server";

const getSingleProject = async (id) => {
	const supabase = await createClient();
	let { data: projectData, error } = await supabase
		.from("projects")
		.select("*")
		.eq("document_id", id)
		.single();

	if (error) {
		console.error("Error fetching project:", error);
		return <p className="text-red-500">Failed to load project data.</p>;
	}

	return {
		projectData: projectData,
		error: error,
	};
};

export { getSingleProject };
