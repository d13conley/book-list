class MasterListController {
    constructor($stateParams, $masterListService) {
        var id = $stateParams["id"];
        this.book = $masterListService.books.filter(p => p.id == id)[0];
    }
}