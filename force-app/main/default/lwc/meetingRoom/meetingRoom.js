import { LightningElement, api } from "lwc";

export default class MeetingRoom extends LightningElement {
  @api meetingRoomsInfo = { roomName: "A-33", roomCapacity: "99" };

  @api showRoomInfo = false;
}
