import type { Schema, Struct } from '@strapi/strapi';

export interface AirlineAirlinePage extends Struct.ComponentSchema {
  collectionName: 'components_airline_airline_pages';
  info: {
    displayName: 'airline-page';
    icon: 'paperPlane';
  };
  attributes: {
    airline_destinations: Schema.Attribute.Component<
      'destination.destination-group',
      false
    >;
    content_tabs: Schema.Attribute.Component<'shared.content-tab', true>;
    hot_deals: Schema.Attribute.Component<'airline.deal-entry', true>;
    intro_paragraph: Schema.Attribute.Blocks;
    intro_title: Schema.Attribute.String;
    popular_routes: Schema.Attribute.Component<'airline.deal-entry', true>;
    related_airlines: Schema.Attribute.Component<'shared.airline-card', true>;
    related_articles: Schema.Attribute.Component<
      'shared.related-article',
      true
    >;
    related_faqs: Schema.Attribute.Component<'shared.faq', true>;
  };
}

export interface AirlineDealEntry extends Struct.ComponentSchema {
  collectionName: 'components_airline_deal_entries';
  info: {
    displayName: 'deal-entry';
    icon: 'shoppingCart';
  };
  attributes: {
    airline: Schema.Attribute.Relation<'oneToOne', 'api::airline.airline'>;
    book_now_label: Schema.Attribute.String;
    book_now_url: Schema.Attribute.String;
    from: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    price_label: Schema.Attribute.String;
    to: Schema.Attribute.String;
  };
}

export interface AirlineRegionTab extends Struct.ComponentSchema {
  collectionName: 'components_airline_region_tabs';
  info: {
    displayName: ' region-tab';
    icon: 'dashboard';
  };
  attributes: {
    country_airline_links: Schema.Attribute.Component<
      'shared.country-airline-link',
      true
    >;
    region: Schema.Attribute.String;
  };
}

export interface DestinationDealEntry extends Struct.ComponentSchema {
  collectionName: 'components_destination_deal_entries';
  info: {
    displayName: 'deal-entry';
    icon: 'briefcase';
  };
  attributes: {
    airline: Schema.Attribute.Relation<'oneToOne', 'api::airline.airline'>;
    book_now_label: Schema.Attribute.String;
    book_now_url: Schema.Attribute.String;
    flight_route: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    price_label: Schema.Attribute.String;
    trip_type: Schema.Attribute.String;
  };
}

export interface DestinationDestinationGroup extends Struct.ComponentSchema {
  collectionName: 'components_destination_destination_groups';
  info: {
    displayName: 'destination-group';
    icon: 'pinMap';
  };
  attributes: {
    cities: Schema.Attribute.Component<'shared.destination-card', true>;
    countries: Schema.Attribute.Component<'shared.destination-card', true>;
    intro_paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DestinationDestinationsTabSection
  extends Struct.ComponentSchema {
  collectionName: 'components_destination_destinations_tab_sections';
  info: {
    displayName: 'destinations-tab-section';
    icon: 'layout';
  };
  attributes: {
    destinations: Schema.Attribute.Component<'shared.destination-card', true>;
    tab_type: Schema.Attribute.Enumeration<['city', 'country']>;
  };
}

export interface DestinationHotelDealEntry extends Struct.ComponentSchema {
  collectionName: 'components_destination_hotel_deal_entries';
  info: {
    displayName: 'hotel-deal-entry';
    icon: 'house';
  };
  attributes: {
    bed_type_label: Schema.Attribute.String;
    hotel_label: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pay_small_small_amount: Schema.Attribute.Decimal;
    price: Schema.Attribute.Decimal;
    rating: Schema.Attribute.Decimal;
    room_type: Schema.Attribute.Enumeration<
      [
        'Single room',
        'Standard double room',
        'Standard twin room',
        'Deluxe room',
        'Deluxe double room',
        'Studio room or apartment',
        'Junior suite',
        'Executive suite',
        'Presidential suite',
      ]
    >;
    room_type_label: Schema.Attribute.String;
    see_availability_url: Schema.Attribute.String;
  };
}

export interface SharedAirlineCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_airline_cards';
  info: {
    displayName: 'airline-card';
    icon: 'plane';
  };
  attributes: {
    airline: Schema.Attribute.Relation<'oneToOne', 'api::airline.airline'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContentTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_tabs';
  info: {
    displayName: 'content-tab';
    icon: 'bulletList';
  };
  attributes: {
    bullet_points: Schema.Attribute.Blocks;
    content_links: Schema.Attribute.String;
    intro_paragraph: Schema.Attribute.Text;
    tab_title: Schema.Attribute.String;
  };
}

export interface SharedCountryAirlineLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_country_airline_links';
  info: {
    displayName: 'country-airline-link';
    icon: 'attachment';
  };
  attributes: {
    airlines: Schema.Attribute.Relation<'oneToMany', 'api::airline.airline'>;
    label: Schema.Attribute.String;
  };
}

export interface SharedDestinationCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_destination_cards';
  info: {
    displayName: 'destination-card';
    icon: 'pinMap';
  };
  attributes: {
    destination: Schema.Attribute.Relation<
      'oneToOne',
      'api::destination.destination'
    >;
    flag: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_city: Schema.Attribute.Boolean;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
    icon: 'bulletList';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface SharedHeaderParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_header_paragraphs';
  info: {
    displayName: 'header-paragraph';
    icon: 'book';
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    paragraph: Schema.Attribute.RichText;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'arrowLeft';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedRelatedArticle extends Struct.ComponentSchema {
  collectionName: 'components_shared_related_articles';
  info: {
    displayName: 'related-article';
    icon: 'apps';
  };
  attributes: {
    external_url: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'airline.airline-page': AirlineAirlinePage;
      'airline.deal-entry': AirlineDealEntry;
      'airline.region-tab': AirlineRegionTab;
      'destination.deal-entry': DestinationDealEntry;
      'destination.destination-group': DestinationDestinationGroup;
      'destination.destinations-tab-section': DestinationDestinationsTabSection;
      'destination.hotel-deal-entry': DestinationHotelDealEntry;
      'shared.airline-card': SharedAirlineCard;
      'shared.content-tab': SharedContentTab;
      'shared.country-airline-link': SharedCountryAirlineLink;
      'shared.destination-card': SharedDestinationCard;
      'shared.faq': SharedFaq;
      'shared.header-paragraph': SharedHeaderParagraph;
      'shared.link': SharedLink;
      'shared.related-article': SharedRelatedArticle;
    }
  }
}
