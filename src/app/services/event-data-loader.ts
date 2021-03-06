import {ThreeService} from './three.service';
import {UIService} from './ui.service';

export interface EventDataLoader {

  /**
   * Takes an object that represents ONE event and takes care of adding
   * the different objects to the graphic library and the UI controls.
   * @param eventData object representing the event.
   * @param graphicsLibrary service containing functionality to draw the 3D objects.
   * @param ui service for showing menus and controls to manipulate the geometries.
   */
  buildEventData(eventData: any, graphicsLibrary: ThreeService, ui: UIService): void;

  /**
   * Takes an object containing multiple events and returns the keys of these events.
   * @param eventsData object that contains the different events.
   * @return list of keys of the different events.
   */
  getEventsList(eventsData: any): string[];

  /**
   * Returns the different collections for the current stored event.
   * @return list of strings, each representing a collection of the event displayed.
   */
  getCollections(): string[];

  /**
   * Returns all the objects inside a collection.
   * @param collectionName Key of the collection that will be retrieved.
   * @return object containing all physics objects from the desired collection.
   */
  getCollection(collectionName: string): any;

}
