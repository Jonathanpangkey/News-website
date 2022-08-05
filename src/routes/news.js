const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("", async (req, res) => {
	// res.render('news')
	try {
		const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
		res.render("news", {
			articles: newsAPI.data,
		});
	} catch (error) {
        // error handling
		if (error) {
			res.render("news", {
				articles: null,
			});
			console.log(error);
		} 
	}
});

// single article
router.get("/article/:id", async (req, res) => {
	// res.render('news')
	let article = req.params.id
	try {
		const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${article}`);
		res.render("newssingle", {
			article: newsAPI.data,
		});
	} catch (error) {
        // error handling
		if (error) {
			res.render("newssingle", {
				article: null,
			});
			console.log(error);
		} 
	}
});

// search
router.post("", async (req, res) => {
	// res.render('news')
	let article = req.body.search
	try {
		const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${article}`);
		res.render("search", {
			articles: newsAPI.data,
		});
	} catch (error) {
        // error handling
		if (error) {
			res.render("search", {
				articles: null,
			});
			console.log(error);
		} 
	}
});


// export module
module.exports = router;
