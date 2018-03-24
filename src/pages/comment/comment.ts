import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  addComment: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder ) {

      this.addComment = this.formBuilder.group({
        rating: [5, Validators.required],
        author: ['', Validators.required],
        comment: ['', Validators.required],
      })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    let newComment: Comment;
    newComment = this.addComment.value;
    newComment.date = new Date().toISOString();
    this.viewCtrl.dismiss(newComment);
  }

}
