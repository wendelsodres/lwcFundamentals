import { LightningElement } from "lwc";

export default class MeetingRooms extends LightningElement {
  meetingRoomsInfo = [
    { roomName: "A-01", roomCapacity: "12" },
    { roomName: "B-12", roomCapacity: "18" },
    { roomName: "C-15", roomCapacity: "25" },
    { roomName: "D-25", roomCapacity: "30" },
    { roomName: "E-30", roomCapacity: "48" }
  ];
}
