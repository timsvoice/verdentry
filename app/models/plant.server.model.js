'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Plant Schema
 */
var PlantSchema = new Schema({
	organization: {
		type: Schema.ObjectId,
		ref: 'Organization'
	},
	owners: [{
		memberId: {
			type: Schema.ObjectId,
			ref: 'User'
		},
		memberPermission: {
			type: String,
			enum: ['read', 'update', 'admin'],
			default: ['read']
		}
	}],
	commonName: {
		type: String,
		default: '',
		required: 'Please fill common name',
		trim: true
	},
	scientificName: {
		type: String,
		default: '',
		required: 'Please fill scientific name',
		trim: true
	},
	unitSize: {
		type: String,
		required: 'Please fill available size',
		trim: true
	},
	unitPrice: {
		type: Number,
		required: 'Please fill price per unit'
	},
	unitRoyalty: {
		type: Number
	},
	unitAvailability: [{
		date: {
			type: Date,
			default: Date.now
		},
		quantity: {
			type: Number,
			required: 'Please fill available quantity'
		}
	}],
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Plant', PlantSchema);