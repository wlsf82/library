const Media = require('./index');
describe('Media', () => {
  let media;

  beforeEach(() => media = new Media('Some title'));

  describe('Toggle checkout status', () => {
    it('is false before first checkout', () => {
      expect(media.isCheckedOut).toBe(false);
    });

    it('is set to true after the first checkout', () => {
      media.toggleCheckOutStatus();

      expect(media.isCheckedOut).toBe(true);
    });

    it('is set to false when checking it out twice', () => {
      media.toggleCheckOutStatus();
      media.toggleCheckOutStatus();

      expect(media.isCheckedOut).toBe(false);
    });
  });

  describe('Add rating', () => {
    it('has no rating', () => {
      expect(media.ratings.length).toBe(0);
    });

    it('has one rating after adding it once', () => {
      media.addRating(5);

      expect(media.ratings.length).toBe(1);
      expect(media.ratings[0]).toBe(5);
    });

    it('has two ratings after adding it twice', () => {
      media.addRating(5);
      media.addRating(4);

      expect(media.ratings.length).toBe(2);
      expect(media.ratings[0]).toBe(5);
      expect(media.ratings[1]).toBe(4);
    });

    it('does not accept rating below one', () => {
      media.addRating(0);

      expect(media.ratings.length).toBe(0);
    });

    it('does not accept rating above five', () => {
      media.addRating(5.1);

      expect(media.ratings.length).toBe(0);
    });

    describe('Get average rating', () => {
      beforeEach(() => {
        media.addRating(5);
        media.addRating(4);
      });

      it('correctly calculates the average', () => {
        expect(media.getAverageRating()).toBe(4.5);
      });
    });
  });
});

const CD = require('./index');

describe('CD', () => {
  describe('Shuffle', () => {
    it('returns the only available song', () => {
      cd = new CD('Los Hermanos', 'Ventura', ['O vencedor'])

      expect(cd.shuffle()).toBe('O vencedor');
    });

    describe('When there are more songs', () => {
      beforeEach(() => cd = new CD('Los Hermanos', 'Ventura', ['O vencedor', 'A outra', 'Um par']));

      it('returns a string', () => {
        expect(typeof(cd.shuffle())).toBe('string');
      });

      it('returns a non empty string', () => {
        expect(cd.shuffle()).not.toBe('');
      });
    });
  })
});
