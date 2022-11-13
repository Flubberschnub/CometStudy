import React from 'react';
import $ from 'jquery';
import './Sidebar.css';
import App from './App';
import {useFormik} from 'formik';
import ReactDOM from 'react-dom/client';
import {Helmet} from 'react-helmet';




  


function Sidebar() {
	const formik = useFormik({
		initialValues: {
			search: ""
		},
		onSubmit: (values, {resetForm}) => { 
			// handle form submission
			alert(values.search);
			resetForm();
			var filterArray = App.dataArr.filter(function (el){
				return el.subject === "CS2337.003";
			  });
			App.createCardList();
		},
		handleChange: values => {
			// display search input
		}
	});
	return (
		<div>
			<div id="mySidenav" class="sidenav">
				<img src={require('./logoutd.png')} class="logo"></img>
				<button class="closebtn" onClick={closeNav}>&times;</button>
				<h1 class="pagetitle">eStudying</h1>
				<br></br>
				<br></br>
				<br></br>
				<form class="search-form" onSubmit={formik.handleSubmit}>
					<input class="search-bar"
						id="search"
						name="search"
						type="search"
						placeholder="Search Study Section"
						value={formik.values.search}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<input class="search-button" type="submit" value="Submit" />
				</form>
			</div>

			{/*Use any element to open the sidenav*/}
			<button class="openbtn" onClick={openNav}>&equiv;</button>
			{/*<span onclick="openNav()">open</span>*/}

			{/*Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page*/}
			<div id="main">
				<App />
			</div>

			
		</div>
	)
}

export default Sidebar


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "350px";
	document.getElementById("main").style.marginLeft = "350px";
}
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}