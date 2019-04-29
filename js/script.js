//These variable store DOM elements.
const listItems = document.querySelectorAll('.student-item');
const maxItems = 10;

//This function will create pages of students.
function showPage( list, page ) {	
		const startIndex = ( page * maxItems ) - maxItems;
		const endIndex = ( page * maxItems ) - 1;

    //This for loop will display only 10 students and hide all the rest.
		for( let i = 0; i < list.length; i ++ ) {
			if( i >= startIndex && i <  endIndex ) {
				list[i].style.display = 'block';
      } 
      else {
				list[i].style.display = 'none';
			}	
		} 
}

//This function will add functional buttons to the pages and reveal the rest of the list with pages of 10 when clicked.
function appendPageLinks( list ) {
  const pages = document.querySelector( '.page' );
  const div = document.createElement( 'div' );
  const ul = document.createElement( 'ul' );
  const listLength = list.length / maxItems

  div.classList.add( 'pagination' );
  div.appendChild( ul );
  pages.appendChild( div );
  
  //This for loop will start the pages at index 1 and so on.
  for( let i = 0; i < listLength; i ++ ) {
    const li = document.createElement( 'li' );
    const a = document.createElement( 'a' );

    a.setAttribute( 'href', '#' );
    a.textContent = i + 1;
    li.appendChild( a );
    ul.appendChild( li );
  }

  //This for loop adds the click functianlity to the pages.
  const aTag = document.querySelectorAll( 'a' );
  
  aTag[0].classList.add('active');

  for( let i = 0; i < aTag.length; i++) {
    ul.addEventListener('click', ( event ) => {
      aTag[i].classList.remove( 'active' );
      event.target.classList.add( 'active' );
      showPage( listItems, event.target.textContent );
    });
  }
}

//This will call the functions showPage and appendPageLinks.
showPage( listItems, 1 );
appendPageLinks( listItems );


