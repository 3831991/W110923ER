/**
 * מחלקה ליצירת גלרייה
 * @param elemId מקבל את המזהה שבו נשים את הגלרייה
 * @param imagesArr שמות של תמונות שיוצגו בגלרייה
 */
class Gallery {
    images = [];
    imgElem = document.createElement("img");
    currentImage = 0;

    constructor(elemId, ...imagesArr) {
        // חיבור לאלמנט של הגלרייה (לפי שם המזהה שקיבלנו)
        const galleryElem = document.getElementById(elemId);
        // שם את שמות התמונות שקיבלנו בתוך המחלקה
        this.images = imagesArr;

        galleryElem.appendChild(this.imgElem);
        this.showImage();

        // בלחיצה על העכבר הגלרייה תתקדם
        this.imgElem.addEventListener("click", () => this.nextImage());
    }

    nextImage() {
        // מקדם את המיקום ב-1
        this.currentImage++;

        // אם מיקום התמונה גדול או שווה לאורך המערך, מחזירים את המיקום ל-0 (מתחילים מהתחלה)
        if (this.currentImage >= this.images.length) {
            this.currentImage = 0;
        }

        this.showImage();
    }

    showImage() {
        // מחליפים את התמונה בגלרייה לפי המיקום החדש
        this.imgElem.src = `./images/${this.images[this.currentImage]}`;
    }
}


new Gallery("gallery", "תמונה (1).jpg", "תמונה (2).jpg", "תמונה (12).jpg");
new Gallery("gallery", "תמונה (5).jpg", "תמונה (7).jpg");