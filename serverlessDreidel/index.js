let driedel_array = ["ג - Gimmel", "ה - Hay", "ש - Shin", "נ - Nun"];
let random_driedel =
	driedel_array[Math.floor(Math.random() * (driedel_array.length - 1) + 1)];

module.exports = async function(context, req) {
	// context.log("JavaScript HTTP trigger function processed a request.");
	try {
		context.res = {
			status: 200,
			body: random_driedel
		};
	} catch (error) {
		context.res = {
			status: 400,
			body: "Something went wrong, try again",
			error
		};
	}
};
