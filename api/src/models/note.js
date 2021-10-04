const mongoose = require('mongoose')

const noteShema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		favoriteCount: {
			type: Number,
			default: 0,
		},
		favoritedBy: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{ timestamps: true }
)

const Note = mongoose.model('Note', noteShema)

module.exports = Note