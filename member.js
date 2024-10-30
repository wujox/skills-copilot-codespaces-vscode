function skillMember() {
    return {
      restrict: 'E',
      templateUrl: 'modules/member.html',
      controller: 'Skill',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        member: '='
      }
    };
}