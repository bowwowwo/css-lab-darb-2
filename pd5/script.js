// Array of book objects
let books = [];

//https://i.pinimg.com/736x/67/a8/06/67a8061dc6724ea4fff4b9e62aacb0be.jpg
//https://i.pinimg.com/736x/7a/62/ca/7a62cabe350cf77dfcd5c11ea326f8bc.jpg

let bookList, sortSelect, searchInput;
let title, author, cover, year, genre;
let currentGenreFilter = "All";

document.addEventListener("DOMContentLoaded", (event) => {
	
	const form = document.getElementById("book-form");
	bookList = document.getElementById("book-list");
	sortSelect = document.getElementById("sort");
	searchInput = document.getElementById("search");

	title = document.getElementById("title");
	author = document.getElementById("author");
	cover = document.getElementById("cover");
	year = document.getElementById("year");
	genre = document.getElementById("genre");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		remove_errors();
		
		if (!all_forms()) return;

		const book = {
			title: title.value,
			author: author.value,
			cover: cover.value,
			year: year.value,
			genre: genre.value,
			addedAt: new Date().toLocaleString()
		};

		books.push(book);
		renderBooks();
		form.reset();
	});

	document.querySelectorAll('input[name="genre-filter"]').forEach(radio => {
		radio.addEventListener("change", (e) => {
			currentGenreFilter = e.target.value;
			renderBooks();
		});
	});

	sortSelect.addEventListener("change", () => {
		renderBooks();
	});
	

});

	function image_validation() {
		const url = cover.value.trim();
		const regex = /\.(jpg|jpeg|png|gif|svg)$/i;

		if (!regex.test(url)) {
			document.getElementById("cover-error").textContent =
			"Url must be a valid format (jpg, jpeg, png, gif, svg)";
			return false;
		}
		return true;
	}

	function year_validation() {
		const yearyear = parseInt(year.value);
		const currYear = new Date().getFullYear();

		if (yearyear < 1500 || yearyear > currYear) {
			document.getElementById("year-error").textContent =
			`Year must be between 1500 and ${currYear}.`;
			return false;
		}
		return true;
	}

	function all_forms() {
		let valid = true;
		if (!title.value.trim()) {
			document.getElementById("title-error").textContent = "Enter a title";
			valid = false;
		}

		if (!author.value.trim()) {
			document.getElementById("author-error").textContent = "Enter an author";
			valid = false;
		}

		if (!genre.value) {
			document.getElementById("genre-error").textContent = "Enter a genre";
			valid = false;
		}

		if (!image_validation()) valid = false;
		if (!year_validation()) valid = false;
		return valid;
	}

	function renderBooks() {
		bookList.innerHTML = "";

		const allBooks = get_books();

		allBooks.forEach((book, index) => {
			bookList.innerHTML += `
		<div class="book"
		style="
			background-color: #ffffcc;
			margin: 16px;
			padding: 16px;
			border-radius: 8px;
			box-shadow: 0 5px 5px #000000;
			width: 220px;
		"
		>
			<img src="${book.cover}" width="100">
			<p><strong>${book.title}</strong></p>
			<p>${book.author}</p>
			<p>${book.year} | ${book.genre}</p>
			<p>Added: ${book.addedAt}</p>
			<button onclick="removeBook(${books.indexOf(book)})">Remove</button>
		</div>
		`;
		});
	}

	function removeBook(index) {
		books.splice(index, 1);
		renderBooks();
	}		
	
	function get_books() {
		let result = [...books];

		if (currentGenreFilter !== "All") {
			result = result.filter(book => book.genre === currentGenreFilter);
		}
		const sortValue = sortSelect.value;

		switch (sortValue) {
			case "title-asc":
				result.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case "title-desc":
				result.sort((a, b) => b.title.localeCompare(a.title));
				break;
			case "year-asc":
				result.sort((a, b) => a.year - b.year);
				break;
			case "year-desc":
				result.sort((a, b) => b.year - a.year);
				break;
			case "date-asc":
				result.sort((a, b) => new Date(a.addedAt) - new Date(b.addedAt));
				break;
			case "date-desc":
				result.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
				break;
		}
		return result;
}
	
	function remove_errors() {
		document.querySelectorAll(".error").forEach(e => e.textContent = "");
	}