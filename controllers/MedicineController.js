import mongoose from "mongoose";
import HttpError from "../models/http-errors.js";

import { param, validationResult } from "express-validator";

export const test = async (req, res) => {
	const { number } = req.body;

	const result = []; //inisiasi array

	for (let i = 0; i < 8; i++) {
		const digit = parseInt(number.charAt(i));
		const value = digit * Math.pow(10, 7 - i);
		result.push(value);
	}

	res.status(200).json({ result });
};

export const genap = async (req, res) => {
	const { number } = req.body;

	const evenNumbers = number
		.split("")
		.map((digit) => parseInt(digit))
		.filter((num) => num % 2 !== 0);

	res.status(200).json({ result: evenNumbers });
};

export const prima = async (req, res) => {
	const { number } = req.body;

	const isPrima = (num) => {
		if (num <= 1) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	};

	const primeNumbers = number
		.split("")
		.map((digit) => parseInt(digit))
		.filter((num) => isPrima(num));

	res.status(200).json({ result: primeNumbers });
};
