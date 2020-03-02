import { userHomeModel } from './userHome.model';

export class userHomeService {
    private userModel: userHomeModel[] = [
        {
            title: "title 1",
            subtitle: "subtitle 1",
            description: "description 1"
        },
        {
            title: "title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in quam tempus, hendrerit lectus at, luctus odio. Nulla magna justo, volutpat a nulla sit amet, finibus dapibus elit. Nullam maximus ut erat a viverra. Aliquam elementum ultrices urna, vitae viverra neque congue sit amet. Vestibulum ullamcorper arcu urna, ultrices vestibulum augue tristique vitae. Donec vehicula turpis ut elit molestie, sit amet placerat ante vulputate. Sed scelerisque volutpat libero, eget tincidunt ante lobortis vel. Fusce sed gravida nisl, quis commodo elit. Nam at mattis neque. Mauris tempor molestie elit, sed sodales purus lacinia bibendum. "
        },
        {
            title: "title 3",
            subtitle: "subtitle 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in quam tempus, hendrerit lectus at, luctus odio. Nulla magna justo, volutpat a nulla sit amet, finibus dapibus elit. Nullam maximus ut erat a viverra. Aliquam elementum ultrices urna, vitae viverra neque congue sit amet. Vestibulum ullamcorper arcu urna, ultrices vestibulum augue tristique vitae. Donec vehicula turpis ut elit molestie, sit amet placerat ante vulputate. Sed scelerisque volutpat libero, eget tincidunt ante lobortis vel. Fusce sed gravida nisl, quis commodo elit. Nam at mattis neque. Mauris tempor molestie elit, sed sodales purus lacinia bibendum. "
        },
        {
            title: "title 1",
            subtitle: "subtitle 1",
            description: "description 1"
        },
        {
            title: "title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in quam tempus, hendrerit lectus at, luctus odio. Nulla magna justo, volutpat a nulla sit amet, finibus dapibus elit. Nullam maximus ut erat a viverra. Aliquam elementum ultrices urna, vitae viverra neque congue sit amet. Vestibulum ullamcorper arcu urna, ultrices vestibulum augue tristique vitae. Donec vehicula turpis ut elit molestie, sit amet placerat ante vulputate. Sed scelerisque volutpat libero, eget tincidunt ante lobortis vel. Fusce sed gravida nisl, quis commodo elit. Nam at mattis neque. Mauris tempor molestie elit, sed sodales purus lacinia bibendum. "
        },
        {
            title: "title 3",
            subtitle: "subtitle 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in quam tempus, hendrerit lectus at, luctus odio. Nulla magna justo, volutpat a nulla sit amet, finibus dapibus elit. Nullam maximus ut erat a viverra. Aliquam elementum ultrices urna, vitae viverra neque congue sit amet. Vestibulum ullamcorper arcu urna, ultrices vestibulum augue tristique vitae. Donec vehicula turpis ut elit molestie, sit amet placerat ante vulputate. Sed scelerisque volutpat libero, eget tincidunt ante lobortis vel. Fusce sed gravida nisl, quis commodo elit. Nam at mattis neque. Mauris tempor molestie elit, sed sodales purus lacinia bibendum. "
        }
    ];

    getUserData() {
        return this.userModel.slice();
    }
}