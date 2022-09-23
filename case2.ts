type IComment = {
	commentId: number;
	commentContent: string;
	replies?: IComment[];
};

const comments: IComment[] = [
	{
		commentId: 1,
		commentContent: "Hai",
		replies: [
			{
				commentId: 11,
				commentContent: "Hai juga",
				replies: [
					{
						commentId: 111,
						commentContent: "Haai juga hai jugaa",
					},
					{
						commentId: 112,
						commentContent: "Haai juga hai jugaa",
					},
				],
			},
			{
				commentId: 12,
				commentContent: "Hai juga",
				replies: [
					{
						commentId: 121,
						commentContent: "Haai juga hai jugaa",
					},
				],
			},
		],
	},
	{
		commentId: 2,
		commentContent: "Halooo",
	},
];

let totalComments: number = 0;
const calculateComments = (comment: IComment) => {
	if (comment.replies) {
		totalComments += 1;
		comment.replies.forEach((reply) => calculateComments(reply));
	} else {
		totalComments += 1;
	}
};
comments.forEach((comment) => calculateComments(comment));
console.log(totalComments);
