import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITheme } from '../../interfaces/theme';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get<ITheme[]>(`${apiUrl}/themes`);
  }

  loadTheme(id: number) {
    return this.httpClient.get<ITheme>(`${apiUrl}/themes/${id}`);
  }
}
