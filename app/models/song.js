import { tracked } from '@glimmer/tracking';

export class Song {
  @tracked rating;
  constructor({ title, rating, band }, relationships = {}) {
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
    this.relationships = relationships;
  }
}
