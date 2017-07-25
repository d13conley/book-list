class HomeController {
  constructor($masterListService) {
    this.message = 'Welcome to the Master List of Books';
    this.books = $masterListService.books;
  }
}

