<script>

$('#kubernetes').on('click',function() {
  $('#docker-installed-grid').addClass('hide');
  $('#docker-installed-div').addClass('hide');
});
$('#wsl').on('click',function() {
  $('#docker-installed-grid').addClass('hide');
  $('#docker-installed-div').addClass('hide');
});

$('#kubernetes').on('click',function() {
  $('#docker-desktop-installed-grid').addClass('hide');
  $('#docker-desktop-installed-div').addClass('hide');
});
$('#wsc').on('click',function() {
  $('#docker-desktop-installed-grid').addClass('hide');
  $('#docker-desktop-installed-div').addClass('hide');
});
$('#linux').on('click',function() {
  $('#docker-desktop-installed-grid').addClass('hide');
  $('#docker-desktop-installed-div').addClass('hide');
});

$('#standalone').on('click',function() {
  $('#kubernetes-installed-grid').addClass('hide');
  $('#kubernetes-installed-div').addClass('hide');
});
$('#swarm').on('click',function() {
  $('#kubernetes-installed-grid').addClass('hide');
  $('#kubernetes-installed-div').addClass('hide');
});

$('#standalone').on('click',function() {
  $('#access-to-helm-grid').addClass('hide');
  $('#access-to-helm-div').addClass('hide');
});
$('#swarm').on('click',function() {
  $('#access-to-helm-grid').addClass('hide');
  $('#access-to-helm-div').addClass('hide');
});

$('#swarm').on('click',function() {
  $('#sudo-access-grid').addClass('hide');
  $('#sudo-access-div').addClass('hide');
});
$('#kubernetes').on('click',function() {
  $('#sudo-access-grid').addClass('hide');
  $('#sudo-access-div').addClass('hide');
});
$('#wsl').on('click',function() {
  $('#sudo-access-grid').addClass('hide');
  $('#sudo-access-div').addClass('hide');
});
$('#wsc').on('click',function() {
  $('#sudo-access-grid').addClass('hide');
  $('#sudo-access-div').addClass('hide');
});

$('#standalone').on('click',function() {
  $('#swarm-mode-grid').addClass('hide');
  $('#swarm-mode-div').addClass('hide');
});
$('#kubernetes').on('click',function() {
  $('#swarm-mode-grid').addClass('hide');
  $('#swarm-mode-div').addClass('hide');
});

$('#kubernetes').on('click',function() {
  $('#administrator-access-grid').addClass('hide');
  $('#administrator-access-div').addClass('hide');
});
$('#swarm').on('click',function() {
  $('#administrator-access-grid').addClass('hide');
  $('#administrator-access-div').addClass('hide');
});
$('#linux').on('click',function() {
  $('#administrator-access-grid').addClass('hide');
  $('#administrator-access-div').addClass('hide');
});

$('#standalone').on('click',function() {
  $('#administrator-manager-grid').addClass('hide');
  $('#administrator-manager-div').addClass('hide');
});
$('#kubernetes').on('click',function() {
  $('#administrator-manager-grid').addClass('hide');
  $('#administrator-manager-div').addClass('hide');
});
$('#linux').on('click',function() {
  $('#administrator-manager-grid').addClass('hide');
  $('#administrator-manager-div').addClass('hide');
});

$('#standalone').on('click',function() {
  $('#cluster-admin-grid').addClass('hide');
  $('#cluster-admin-div').addClass('hide');
});
$('#swarm').on('click',function() {
  $('#cluster-admin-grid').addClass('hide');
  $('#cluster-admin-div').addClass('hide');
});

$('#kubernetes').on('click',function() {
  $('#wsl-installed-grid').addClass('hide');
  $('#wsl-installed-div').addClass('hide');
});
$('#wsc').on('click',function() {
  $('#wsl-installed-grid').addClass('hide');
  $('#wsl-installed-div').addClass('hide');
});
$('#linux').on('click',function() {
  $('#wsl-installed-grid').addClass('hide');
  $('#wsl-installed-div').addClass('hide');
});

$('#kubernetes').on('click',function() {
  $('#ports-docker-grid').addClass('hide');
  $('#ports-docker-div').addClass('hide');
});

$('#swarm').on('click',function() {
  $('#ports-kube-grid').addClass('hide');
  $('#ports-kube-div').addClass('hide');
});
$('#standalone').on('click',function() {
  $('#ports-kube-grid').addClass('hide');
  $('#ports-kube-div').addClass('hide');
});

$('#standalone').on('click',function() {
  $('#swarm-node-comms-grid').addClass('hide');
  $('#swarm-node-comms-div').addClass('hide');
});
$('#kubernetes').on('click',function() {
  $('#swarm-node-comms-grid').addClass('hide');
  $('#swarm-node-comms-div').addClass('hide');
});

$('#swarm').on('click',function() {
  $('#default-storage-class-grid').addClass('hide');
  $('#default-storage-class-div').addClass('hide');
});
$('#standalone').on('click',function() {
  $('#default-storage-class-grid').addClass('hide');
  $('#default-storage-class-div').addClass('hide');
});

$('#wsc').on('click',function() {
  $('#docker-installed-grid').removeClass('hide');
  $('#docker-installed-div').removeClass('hide');
});
$('#linux').on('click',function() {
  $('#docker-installed-grid').removeClass('hide');
  $('#docker-installed-div').removeClass('hide');
});

$('#kubernetes').on('click',function() {
  $('#kubernetes-installed-grid').removeClass('hide');
  $('#kubernetes-installed-div').removeClass('hide');
});

$('#kubernetes').on('click',function() {
  $('#access-to-helm-grid').removeClass('hide');
  $('#access-to-helm-div').removeClass('hide');
});

$('#swarm').on('click',function() {
  $('#ports-docker-grid').removeClass('hide');
  $('#ports-docker-div').removeClass('hide');
});
$('#standalone').on('click',function() {
  $('#ports-docker-grid').removeClass('hide');
  $('#ports-docker-div').removeClass('hide');
});

$('#swarm').on('click',function() {
  $('#swarm-mode-grid').removeClass('hide');
  $('#swarm-mode-div').removeClass('hide');
});

$('#serverless').on('click',function() {
  $('#cluster-admin-grid').removeClass('hide');
  $('#cluster-admin-div').removeClass('hide');
});
$('#serverless').on('click',function() {
  $('#cluster-admin-grid').removeClass('hide');
  $('#cluster-admin-div').removeClass('hide');
});

$('#wsl').on('click',function() {
  $('#docker-desktop-installed-grid').removeClass('hide');
  $('#docker-desktop-installed-div').removeClass('hide');
});

$('#self-managed').on('click',function() {
  $('#ports-kube-grid').removeClass('hide');
  $('#ports-kube-div').removeClass('hide');
});
$('#serverless').on('click',function() {
  $('#ports-kube-grid').removeClass('hide');
  $('#ports-kube-div').removeClass('hide');
});

$('#swarm').on('click',function() {
  $('#swarm-node-comms-grid').removeClass('hide');
  $('#swarm-node-comms-div').removeClass('hide');
});

$('#serverless').on('click',function() {
  $('#default-storage-class-grid').removeClass('hide');
  $('#default-storage-class-div').removeClass('hide');
});
$('#self-managed').on('click',function() {
  $('#default-storage-class-grid').removeClass('hide');
  $('#default-storage-class-div').removeClass('hide');
});

$('#standalone').on('click',function() {
  $('#administrator-access-grid').removeClass('hide');
  $('#administrator-access-div').removeClass('hide');
});

$('#swarm').on('click',function() {
  $('#administrator-manager-grid').removeClass('hide');
  $('#administrator-manager-div').removeClass('hide');
});

$('#wsl').on('click',function() {
  $('#wsl-installed-grid').removeClass('hide');
  $('#wsl-installed-div').removeClass('hide');
});

$('#standalone').on('click',function() {
  $('#sudo-access-grid').removeClass('hide');
  $('#sudo-access-div').removeClass('hide');
});
$('#linux').on('click',function() {
  $('#sudo-access-grid').removeClass('hide');
  $('#sudo-access-div').removeClass('hide');
});

$('#standalone').on('click',function() {
  $('#sudo-manager-access-grid').addClass('hide');
  $('#sudo-manager-access-div').addClass('hide');
});
$('#kubernetes').on('click',function() {
  $('#sudo-manager-access-grid').addClass('hide');
  $('#sudo-manager-access-div').addClass('hide');
});
$('#wsl').on('click',function() {
  $('#sudo-manager-access-grid').addClass('hide');
  $('#sudo-manager-access-div').addClass('hide');
});
$('#wsc').on('click',function() {
  $('#sudo-manager-access-grid').addClass('hide');
  $('#sudo-manager-access-div').addClass('hide');
});

$('#linux').on('click',function() {
  $('#half-line').addClass('half');
});
$('#wsl').on('click',function() {
  $('#half-line').addClass('half');
});
$('#wsc').on('click',function() {
  $('#half-line').addClass('half');
});
$('#self-managed').on('click',function() {
  $('#half-line').addClass('half');
});
$('#serverless').on('click',function() {
  $('#half-line').addClass('half');
});

$('#swarm').on('click',function() {
  $('#sudo-manager-access-grid').removeClass('hide');
  $('#sudo-manager-access-div').removeClass('hide');
});


$('#to-checklist').on('click',function() {
  $('#dot-checklist').addClass('active');
});
$('#to-setup').on('click',function() {
  $('#setup-dot').addClass('active');
  $('#checklist-setup').addClass('show');
});
$('#linux').on('click',function() {
  $('#checklist-options').addClass('show');
});
$('#wsl').on('click',function() {
  $('#checklist-options').addClass('show');
});
$('#wsc').on('click',function() {
  $('#checklist-options').addClass('show');
});
$('#lets-start').on('click',function() {
  $('#setup').addClass('show');
});

$('#linux').on('click',function() {
  $('#platform').text('linux');
  $('#dot-platform').addClass('active');
  $('#dot-checklist').addClass('active');
});
$('#wsl').on('click',function() {
  $('#platform').text('Windows (WSL)');
  $('#dot-platform').addClass('active');
  $('#dot-checklist').addClass('active');
});
$('#wsc').on('click',function() {
  $('#platform').text('Windows (WSC)');
  $('#dot-platform').addClass('active');
  $('#dot-checklist').addClass('active');
});
$('#self-managed').on('click',function() {
  $('#platform').text('self managed');
  $('#dot-platform').addClass('active');
  $('#dot-checklist').addClass('active');
});
$('#serverless').on('click',function() {
  $('#platform').text('serverless');
  $('#dot-platform').addClass('active');
  $('#dot-checklist').addClass('active');
});

$('#bussiness').on('click',function() {
  $('#edition').text('bussiness');
  $('#dot-edition').addClass('active');
});
$('#community').on('click',function() {
  $('#edition').text('community');
  $('#dot-edition').addClass('active');
});

$('#create-admin-check').on('click',function() {
  $('#create-admin-checklist').toggleClass('active');
});
$('#collection-statistics-check').on('click',function() {
  $('#collection-statistics-checklist').toggleClass('active');
});
$('#license-check').on('click',function() {
  $('#license-checklist').toggleClass('active');
});
$('#environment-check').on('click',function() {
  $('#environment-checklist').toggleClass('active');
});
$('#standalone').on('click',function() {
  $('#choice-kubernetes').addClass('hide');
  $('#operating-system').removeClass('hide');
});
$('#swarm').on('click',function() {
  $('#choice-kubernetes').addClass('hide');
  $('#operating-system').removeClass('hide');
});
$('#kubernetes').on('click',function() {
  $('#operating-system').addClass('hide');
  $('#choice-kubernetes').removeClass('hide');
});

$('#validation-configuration').on('click',function() {
  $('#validation-configuration-dot').toggleClass('active');
});
$('#docker-installed').on('click',function() {
  $('#docker-installed-dot').toggleClass('active');
});
$('#docker-desktop-installed').on('click',function() {
  $('#docker-desktop-installed-dot').toggleClass('active');
});
$('#kubernetes-installed').on('click',function() {
  $('#kubernetes-installed-dot').toggleClass('active');
});
$('#access-to-helm').on('click',function() {
  $('#access-to-helm-dot').toggleClass('active');
});
$('#swarm-mode').on('click',function() {
  $('#swarm-mode-dot').toggleClass('active');
});
$('#sudo-access').on('click',function() {
  $('#sudo-access-dot').toggleClass('active');
});
$('#sudo-manager-access').on('click',function() {
  $('#sudo-manager-access-dot').toggleClass('active');
});
$('#administrator-access').on('click',function() {
  $('#administrator-access-dot').toggleClass('active');
});
$('#administrator-manager').on('click',function() {
  $('#administrator-manager-dot').toggleClass('active');
});
$('#cluster-admin').on('click',function() {
  $('#cluster-admin-dot').toggleClass('active');
});
$('#wsl-installed').on('click',function() {
  $('#wsl-installed-dot').toggleClass('active');
});
$('#ports-docker').on('click',function() {
  $('#ports-docker-dot').toggleClass('active');
});
$('#ports-kube').on('click',function() {
  $('#ports-kube-dot').toggleClass('active');
});
$('#swarm-node-comms').on('click',function() {
  $('#swarm-node-comms-dot').toggleClass('active');
});
$('#default-storage-class').on('click',function() {
  $('#default-storage-class-dot').toggleClass('active');
});

$('#standalone').on('click',function() {
  $('#environment').text('standalone');
  $('#dot-environment').addClass('active');
});
$('#swarm').on('click',function() {
  $('#environment').text('swarm');
  $('#dot-environment').addClass('active');
});
$('#kubernetes').on('click',function() {
  $('#environment').text('kubernetes');
  $('#dot-environment').addClass('active');
});

$('#lets-start').on('click',function() {
  $('#your-setup').addClass('active');
});
$('#to-install').on('click',function() {
  $('#install-dot').addClass('active');
});

$('#self-managed').on('click',function() {
  $('#checklist-options').addClass('show');
});
$('#serverless').on('click',function() {
  $('#checklist-options').addClass('show');
});

</script>