import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ApiPath } from 'src/models/config/test-api-get';
import { GetBooks, Products } from 'src/models/utils/test-request-get';
@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css'],
})
export class TestRequestGetComponent implements OnInit {
  @Input() title = '';
  products: Products[] = [];
  books: GetBooks[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<{ Message: Products[] }>(ApiPath.getApiUrl)
      .subscribe((response) => {
        console.log('console response', response);
        console.log('console response', this.products);
        // * This
        this.products = response.Message;
      });
    this.http
      .get<GetBooks[]>(ApiPath.getApi_Ice_And_File)
      .subscribe((response) => {
        this.books = response;
        console.log('console api books response', this.books);
      });
  }

  searchBookList(name: string) {
    this.http
      .get<GetBooks[]>(ApiPath.getApi_Ice_And_File + '?name=' + name)
      .subscribe((response) => {
        this.books = response;
        console.log('console api books response', this.books);
      });
    console.log(name);
    console.log(this.books);
  }
}
